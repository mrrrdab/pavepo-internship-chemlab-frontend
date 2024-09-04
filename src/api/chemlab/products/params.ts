type AggregatedInfoQueryParams = {
  category: string;
};

type ProductFiltersQueryParams = {
  category?: string;
  productType?: string;
  model?: string;
  manufacturer?: string;
  priceRange?: { min: number; max: number };
  weightRange?: { min: number; max: number };
  colors?: string[];
};

export type { AggregatedInfoQueryParams, ProductFiltersQueryParams };
