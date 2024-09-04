import { GetAggregatedInfoDTO, GetProductDTO, GetProductsDTO } from './dto';
import { PaginationQueryParams } from '../common';
import { AggregatedInfoQueryParams, ProductFiltersQueryParams } from './params';

const getProduct = async (id: string, locale: string): Promise<GetProductDTO> => {
  const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/api/products/${id}?locale=${locale}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product. Status: ${response.status}`);
  }

  return await response.json();
};

const getProducts = async (
  params: ProductFiltersQueryParams & PaginationQueryParams,
  locale: string,
): Promise<GetProductsDTO> => {
  const url = new URL(`${import.meta.env.VITE_API_DOMAIN}/api/products?locale=${locale}`);

  if (params.category) {
    url.searchParams.append('category', params.category.toString());
  }

  if (params.productType) {
    url.searchParams.append('productType', params.productType.toString());
  }

  if (params.model) {
    url.searchParams.append('model', params.model);
  }

  if (params.manufacturer) {
    url.searchParams.append('manufacturer', params.manufacturer);
  }

  if (params.priceRange) {
    url.searchParams.append('priceMin', params.priceRange.min.toString());
    url.searchParams.append('priceMax', params.priceRange.max.toString());
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

const getSpecialOffers = async (params: PaginationQueryParams, locale: string): Promise<GetProductsDTO> => {
  const url = new URL(`${import.meta.env.VITE_API_DOMAIN}/api/products/special-offers?locale=${locale}`);

  if (params.take !== undefined) {
    url.searchParams.append('take', params.take.toString());
  }

  if (params.skip !== undefined) {
    url.searchParams.append('skip', params.skip.toString());
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch special offers. Status: ${response.status}`);
  }

  return await response.json();
};

const getAggregatedInfo = async (params: AggregatedInfoQueryParams, locale: string): Promise<GetAggregatedInfoDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_DOMAIN}/api/products/aggregated-info?category=${params.category}&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch aggregated info. Status: ${response.status}`);
  }

  return await response.json();
};

const getSimilarProducts = async (
  productId: string,
  params: PaginationQueryParams,
  locale: string,
): Promise<GetProductsDTO> => {
  const url = new URL(`${import.meta.env.VITE_API_DOMAIN}/api/products/${productId}/similar?locale=${locale}`);

  if (params.take !== undefined) {
    url.searchParams.append('take', params.take.toString());
  }

  if (params.skip !== undefined) {
    url.searchParams.append('skip', params.skip.toString());
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch similar products. Status: ${response.status}`);
  }

  return await response.json();
};

export { getProduct, getProducts, getSpecialOffers, getAggregatedInfo, getSimilarProducts };
