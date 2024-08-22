import { Button } from '@/components';

import { ProductCard } from './ProductCard';
import { SummaryCard } from './SummaryCard';

// == DATA EXAMPLE ==
const cartProduct = [
  {
    imgUrl: 'https://mikroskopes.ru/wa-data/public/shop/products/56/00/10056/images/3042/3042.970.jpg',
    productType: 'Микроскоп Микромед',
    model: 'МС-5-ZOOM LED',
    manufacturer: 'Микромед',
    price: 65290,
    metadata: [{ label: 'Номер CAS', value: '1379403-11-8' }],
  },
];

const cartProducts = new Array(3).fill(cartProduct[0]);

const CartContents = () => {
  return (
    <div className="flex flex-col gap-6">
      <Button variant="text" className="underline p-0 mr-auto">
        Выбрать все
      </Button>
      <div className="flex gap-12">
        <div className="w-max">
          {cartProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={index.toString()}
              imgUrl={product.imgUrl}
              productType={product.productType}
              model={product.model}
              manufacturer={product.manufacturer}
              price={product.price}
              metadata={product.metadata}
            />
          ))}
        </div>
        <div className="grow">
          <SummaryCard productsCount={4} price={10} discount={10} delivery={10} total={10} />
        </div>
      </div>
    </div>
  );
};

export { CartContents };
