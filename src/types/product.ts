type Product = {
  id: string;
  productType: string;
  model: string;
  manufacturer: string;
  originCountries: string[];
  weight: { value: number; measurementUnit: string };
  images: [{ id: string; url: string; priority: number }];
  price: number;
  discount: number;
  description: string;
  advantages: [{ id: string; title: string; content: string }];
  specs: [{ id: string; spec: string; value: string; measurementUnit?: string }];
  files: [{ id: string; label: string; url: string; previewUrl: string }];
  accessories: [{ id: string; name: string; quantity?: number }];
  transportation: [{ id: string; name: string; value: string; measurementUnit?: string }];
};

type ProductBaseRecord = Pick<Product, 'id' | 'productType' | 'manufacturer' | 'model' | 'images'>;

type CatalogProductRecord = Pick<
  Product,
  'id' | 'productType' | 'model' | 'manufacturer' | 'originCountries' | 'weight' | 'images' | 'price' | 'discount'
>;

type ProductCartRecord = Pick<
  Product,
  'id' | 'productType' | 'model' | 'manufacturer' | 'images' | 'price' | 'discount'
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
