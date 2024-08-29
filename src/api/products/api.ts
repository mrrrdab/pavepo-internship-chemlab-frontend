import {
  AggregatedInfoQueryParams,
  GetAggregatedInfoDTO,
  GetProductDTO,
  GetProductsDTO,
  ProductFiltersQueryParams,
} from './dto';
import { PaginationQueryParams } from '../common/types';

const getProduct = async (id: string): Promise<GetProductDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product. Status: ${response.status}`);
  }

  return await response.json();
};

const getProducts = async (params: ProductFiltersQueryParams & PaginationQueryParams): Promise<GetProductsDTO> => {
  const url = new URL(`${import.meta.env.VITE_API_DOMAIN}/api/products`);

  if (params.category) {
    url.searchParams.append('category', params.category.toString());
  }

  if (params.priceRange) {
    url.searchParams.append('priceMin', params.priceRange.min.toString());
    url.searchParams.append('priceMax', params.priceRange.max.toString());
  }

  if (params.manufacturer) {
    url.searchParams.append('manufacturer', params.manufacturer);
  }

  if (params.weightRange) {
    url.searchParams.append('weightMin', params.weightRange.min.toString());
    url.searchParams.append('weightMax', params.weightRange.max.toString());
  }

  if (params.colors && params.colors.length > 0) {
    params.colors.forEach(color => {
      url.searchParams.append('colors', color);
    });
  }

  if (params.take !== undefined) {
    url.searchParams.append('take', params.take.toString());
  }

  if (params.skip !== undefined) {
    url.searchParams.append('skip', params.skip.toString());
  }
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch products. Status: ${response.status}`);
  }

  return response.json();
};

const getSpecialOffers = async (params: PaginationQueryParams): Promise<GetProductsDTO> => {
  const url = new URL(`${import.meta.env.VITE_API_DOMAIN}/api/products/special-offers`);

  if (params.take !== undefined) {
    url.searchParams.append('take', params.take.toString());
  }

  if (params.skip !== undefined) {
    url.searchParams.append('skip', params.skip.toString());
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch products. Status: ${response.status}`);
  }

  return await response.json();
};

const getAggregatedInfo = async (params: AggregatedInfoQueryParams): Promise<GetAggregatedInfoDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/products/aggregated-info?${params.category}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch aggregated info. Status: ${response.status}`);
  }

  return await response.json();
};

export { getProduct, getProducts, getSpecialOffers, getAggregatedInfo };
