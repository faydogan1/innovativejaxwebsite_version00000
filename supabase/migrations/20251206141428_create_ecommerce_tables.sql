/*
  # Create e-commerce tables

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `category` (text)
      - `image_url` (text)
      - `created_at` (timestamp)

    - `shopping_carts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `created_at` (timestamp)

    - `cart_items`
      - `id` (uuid, primary key)
      - `cart_id` (uuid, foreign key to shopping_carts)
      - `product_id` (uuid, foreign key to products)
      - `quantity` (integer)
      - `created_at` (timestamp)

    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `total_amount` (numeric)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - RLS enabled on all tables
    - Users can only access their own cart and orders
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  category text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS shopping_carts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id uuid NOT NULL REFERENCES shopping_carts(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id),
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  total_amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  stripe_payment_id text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are viewable by everyone"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can view own cart"
  ON shopping_carts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own cart"
  ON shopping_carts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own cart items"
  ON cart_items FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM shopping_carts
    WHERE shopping_carts.id = cart_items.cart_id
    AND shopping_carts.user_id = auth.uid()
  ));

CREATE POLICY "Users can manage own cart items"
  ON cart_items FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM shopping_carts
    WHERE shopping_carts.id = cart_items.cart_id
    AND shopping_carts.user_id = auth.uid()
  ));

CREATE POLICY "Users can update own cart items"
  ON cart_items FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM shopping_carts
    WHERE shopping_carts.id = cart_items.cart_id
    AND shopping_carts.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete own cart items"
  ON cart_items FOR DELETE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM shopping_carts
    WHERE shopping_carts.id = cart_items.cart_id
    AND shopping_carts.user_id = auth.uid()
  ));

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

INSERT INTO products (name, description, price, category, image_url) VALUES
('Standard Evaluation Package', 'Comprehensive program evaluation for small to medium projects', 15000.00, 'Evaluation', 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg'),
('Research Study - Quasi-Experimental', 'Design and conduct quasi-experimental research studies', 25000.00, 'Research', 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg'),
('Market Research Analysis', 'Complete market analysis and user experience research', 12000.00, 'Market Research', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'),
('Consulting Package - 20 Hours', 'Technology integration and organizational planning consultation', 8000.00, 'Consulting', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'),
('Randomized Controlled Trial', 'Full RCT design, implementation, and statistical analysis', 45000.00, 'Research', 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg'),
('Capacity Building Workshop', '3-day internal capacity building workshop with assessment tools', 18000.00, 'Consulting', 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg');
