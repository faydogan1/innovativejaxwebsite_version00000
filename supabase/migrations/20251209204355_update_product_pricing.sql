/*
  # Update product pricing and names

  1. Changes
    - Rename "Standard Evaluation Package" to "Basic Evaluation Package"
    - Update price from $15,000 to $22,000
*/

UPDATE products
SET name = 'Basic Evaluation Package', price = 22000.00
WHERE name = 'Standard Evaluation Package';
