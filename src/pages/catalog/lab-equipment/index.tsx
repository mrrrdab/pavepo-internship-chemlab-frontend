import React, { useState } from 'react';

import { getProducts, PaginationQueryParams, ProductFiltersQueryParams } from '@/api';

import { Layout } from '../layout';
import { ProductsSection, FiltersSection } from '../components';

type FilterParams = ProductFiltersQueryParams & PaginationQueryParams;

const LabEquipmentPage: React.FC = () => {
  const [filters, setFilters] = useState({} as FilterParams);
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyFilters = (filters: FilterParams) => {
    setFilters(filters);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-5">
        <div className="lg:w-1/3 3xl:w-1/4">
          <FiltersSection onApplyFilters={handleApplyFilters} isLoading={isLoading} />
        </div>
        <div className="flex-1">
          <ProductsSection
            filters={filters}
            fetchProducts={params => getProducts({ ...filters, ...params })}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </Layout>
  );
};

export { LabEquipmentPage };
