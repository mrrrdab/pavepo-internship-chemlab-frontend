import { GetProductDTO } from '@/api';

type ProductBaseRecord = Pick<
  GetProductDTO['data'],
  'id' | 'category' | 'productType' | 'manufacturer' | 'model' | 'images'
>;

type ProductDetailedRecord = Pick<
  GetProductDTO['data'],
  | 'id'
  | 'category'
  | 'productType'
  | 'model'
  | 'manufacturer'
  | 'originCountries'
  | 'weight'
  | 'images'
  | 'price'
  | 'discount'
  | 'description'
>;

type CatalogProductRecord = Pick<
  GetProductDTO['data'],
  | 'id'
  | 'category'
  | 'productType'
  | 'model'
  | 'manufacturer'
  | 'originCountries'
  | 'weight'
  | 'images'
  | 'price'
  | 'discount'
>;

type ProductCartRecord = Pick<
  GetProductDTO['data'],
  'id' | 'category' | 'productType' | 'model' | 'manufacturer' | 'images' | 'price' | 'discount'
> & {
  quantity: number;
  selected: boolean;
};

type UpdateProductCartRecord = Pick<ProductCartRecord, 'id'> &
  Partial<Pick<ProductCartRecord, 'quantity' | 'selected'>>;

type DeleteProductCartRecord = Pick<ProductCartRecord, 'id'>;

export type {
  ProductBaseRecord,
  ProductDetailedRecord,
  CatalogProductRecord,
  ProductCartRecord,
  UpdateProductCartRecord,
  DeleteProductCartRecord,
};
