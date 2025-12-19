import { useState, useEffect } from 'react';
import { ShoppingCart as CartIcon, X, Plus, Minus, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product_name: string;
  product_price: number;
}

interface ShoppingCartProps {
  userId?: string;
  onCheckout: () => void;
}

export default function ShoppingCart({ userId, onCheckout }: ShoppingCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      loadCart();
    }
  }, [userId]);

  const loadCart = async () => {
    if (!userId) return;

    try {
      const { data: cart, error: cartError } = await supabase
        .from('shopping_carts')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle();

      if (cartError) throw cartError;

      if (cart) {
        const { data: items, error: itemsError } = await supabase
          .from('cart_items')
          .select(`
            id,
            product_id,
            quantity,
            products:product_id(name, price)
          `)
          .eq('cart_id', cart.id);

        if (itemsError) throw itemsError;

        const formattedItems = items?.map((item: any) => ({
          id: item.id,
          product_id: item.product_id,
          quantity: item.quantity,
          product_name: item.products.name,
          product_price: item.products.price,
        })) || [];

        setCartItems(formattedItems);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity: newQuantity })
        .eq('id', itemId);

      if (error) throw error;

      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;

      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );

  if (!userId) {
    return (
      <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
        <CartIcon size={24} />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <CartIcon size={24} />
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
            <h3 className="font-bold text-lg">Shopping Cart</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">
              <X size={20} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <>
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.product_name}
                        </p>
                        <p className="text-blue-600 font-semibold">
                          ${item.product_price.toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-sm font-medium min-w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white space-y-3">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-blue-600">${total.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    onCheckout();
                    setIsOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
