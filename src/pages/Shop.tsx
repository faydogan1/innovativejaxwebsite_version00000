import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
}

interface ShopProps {
  onAddToCart: () => void;
}

interface UserSession {
  user?: any;
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initPage = async () => {
      await loadProducts();
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (isMounted) {
          setUserId(user?.id || null);
        }
      } catch (error) {
        console.error('Error checking user:', error);
        if (isMounted) {
          setUserId(null);
        }
      }
    };

    initPage();

    return () => {
      isMounted = false;
    };
  }, []);

  const loadProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = async (productId: string) => {
    if (!userId) {
      alert('Please login to add items to cart');
      return;
    }

    try {
      let { data: cart } = await supabase
        .from('shopping_carts')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle();

      if (!cart) {
        const { data: newCart, error: createError } = await supabase
          .from('shopping_carts')
          .insert([{ user_id: userId }])
          .select()
          .single();

        if (createError) throw createError;
        cart = newCart;
      }

      const { error: insertError } = await supabase
        .from('cart_items')
        .insert([
          {
            cart_id: cart.id,
            product_id: productId,
            quantity: 1,
          },
        ]);

      if (insertError) throw insertError;
      onAddToCart();
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart');
    }
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20">
      <section className="relative py-16 text-white">
        <img
          src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Our Services & Products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Services & Products
            </h1>
            <p className="text-xl text-blue-100">
              Choose from our premium evaluation and research packages
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                  {product.name === "Research Study - Quasi-Experimental" ? (
                    <img
                      src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : product.name === "Randomized Controlled Trial" ? (
                    <img
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ShoppingCart size={48} className="mx-auto mb-2" />
                        <p className="text-sm">{product.category}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-3xl font-bold text-blue-600">
                        ${(product.price / 1000).toFixed(1)}k
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110 shadow-lg"
                    >
                      <ShoppingCart size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
