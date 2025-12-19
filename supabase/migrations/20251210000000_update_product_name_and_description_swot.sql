/*
      # Update product name and description to Basic SWOT evaluation package

      1. Modified Tables
        - `products`
          - Renamed "Standard Evaluation Package" to "Basic SWOT evaluation package".
          - Changed description for "Basic SWOT evaluation package" from "Comprehensive program evaluation for small to medium projects" to "Basic Strengths, Weaknesses, Opportunities, and Threats Evaluation for small and medium organizations".
    */

    DO $$
    BEGIN
      -- Update "Standard Evaluation Package" to "Basic SWOT evaluation package"
      UPDATE products
      SET
        name = 'Basic SWOT evaluation package',
        description = 'Basic Strengths, Weaknesses, Opportunities, and Threats Evaluation for small and medium organizations'
      WHERE name = 'Standard Evaluation Package';
    END $$;
