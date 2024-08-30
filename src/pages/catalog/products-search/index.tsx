import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSearch } from '@/hooks';
import { getProducts, PaginationQueryParams, ProductFiltersQueryParams } from '@/api';

import { Layout } from '../layout';
import { ProductsSection } from '../components';

type FilterParams = ProductFiltersQueryParams & PaginationQueryParams;

const ProductsSearchPage: React.FC = () => {
  const location = useLocation();
  const { searchQuery } = useSearch();
  const [filters, setFilters] = useState({} as FilterParams);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('searchParams') || searchQuery;
    const [productType, model] = search.split(', ').map(str => str.trim());

    setFilters({
      productType: productType,
      model: model,
    });
  }, [location.search, searchQuery]);

  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">
        Товары по запросу <span className="opacity-65">{searchQuery}</span>
      </h1>
      <ProductsSection filters={filters} fetchProducts={params => getProducts({ ...filters, ...params })} />
    </Layout>
  );
};

export { ProductsSearchPage };
