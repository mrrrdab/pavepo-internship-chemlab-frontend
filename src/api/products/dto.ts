import { Product } from '@/types';

type GetProductDTO = { data: Product };
type GetProductsDTO = { data: Product[]; metadata: { totalCount: number } };

type GetAggregatedInfoDTO = {
  data: {
    manufacturers: string[];
    weights: number[];
    priceRange: {
      min: number;
      max: number;
    };
    colors: string[];
  };
};

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

export type {
  GetProductDTO,
  GetProductsDTO,
  GetAggregatedInfoDTO,
  AggregatedInfoQueryParams,
  ProductFiltersQueryParams,
};
