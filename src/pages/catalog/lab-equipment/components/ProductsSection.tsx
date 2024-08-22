import { useState } from 'react';
import { useQuery } from 'react-query';

import { getLabEquipmentProducts } from '@/api/lab-equipment';

import { ProductCard } from './ProductCard';

const LIMIT = 9;

const calculateRows = (totalProducts: number, limit: number) => {
  if (totalProducts === 0) return 1;
  return Math.ceil(totalProducts / limit);
};

// TODO: Pagination block
const ProductsSection = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, isFetched } = useQuery(
    ['lab-equipment-products', page, LIMIT],
    () => getLabEquipmentProducts({ page, limit: LIMIT }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  );

  const rows = data ? calculateRows(data.products.length, LIMIT) : 1;
  const hasNext = data?.totalCount && data.totalCount > page * LIMIT;

  return (
    <section
      className="grid grid-cols-3 gap-x-5 gap-y-6"
      style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
    >
      {data?.products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          imgUrl={product.imgUrl}
          productType={product.productType}
          model={product.model}
          manufacturer={product.manufacturer}
          originCountries={product.originCountries}
          weight={product.weight}
          measurementUnit={product.measurementUnit}
          price={product.price}
        />
      ))}
    </section>
  );
};

export { ProductsSection };
