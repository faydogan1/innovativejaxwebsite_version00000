/*
      # Update product names and descriptions

      1. Modified Tables
        - `products`
          - Renamed "basic evaluation package" to "Basic SWOT evaluation package".
          - Changed description for "Basic SWOT evaluation package" from "Comprehensive program evaluation for small to medium projects" to "Basic Strengths, Weaknesses, Opportunities, and Threats Evaluation for small and medium organizations".
    */

    DO $$
    BEGIN
      -- Update "basic evaluation package" to "Basic SWOT evaluation package"
      UPDATE products
      SET
        name = 'Basic SWOT evaluation package',
        description = 'Basic Strengths, Weaknesses, Opportunities, and Threats Evaluation for small and medium organizations'
      WHERE name = 'basic evaluation package';
    END $$;
