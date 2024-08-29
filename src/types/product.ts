import { Category } from './category';
import { Image } from './image';

type Advantage = { id: number; title: string; content: string };
type Spec = { id: number; spec: string; value: string; measurementUnit?: string };
type File = { id: number; label: string; url: string; image: Image };
type Accessory = { id: number; name: string; quantity?: number };
type Transportation = { id: number; name: string; value: string; measurementUnit?: string };

type Product = {
  id: number;
  category: Category;
  productType: string;
  model: string;
  manufacturer: string;
  originCountries: string[];
  description: string;
  price: number;
  discount: number;
  weight: { value: number; measurementUnit: string };
  color: string;
  images: Image[];
  advantages: Advantage[];
  specs: Spec[];
  files: File[];
  accessories: Accessory[];
  transportationData: Transportation[];
};

type ProductBaseRecord = Pick<Product, 'id' | 'category' | 'productType' | 'manufacturer' | 'model' | 'images'>;

type CatalogProductRecord = Pick<
  Product,
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
  Product,
  'id' | 'category' | 'productType' | 'model' | 'manufacturer' | 'images' | 'price' | 'discount'
> & {
  quantity: number;
  selected: boolean;
};

type UpdateProductCartRecord = Pick<ProductCartRecord, 'id'> &
  Partial<Pick<ProductCartRecord, 'quantity' | 'selected'>>;

type DeleteProductCartRecord = Pick<ProductCartRecord, 'id'>;

export type {
  Product,
  ProductBaseRecord,
  CatalogProductRecord,
  ProductCartRecord,
  UpdateProductCartRecord,
  DeleteProductCartRecord,
};
