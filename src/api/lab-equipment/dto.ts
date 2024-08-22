type GetLabEquipmentProductDTO = {
  id: string;
  imgUrl: string;
  productType: string;
  model: string;
  manufacturer: string;
  originCountries: string[];
  weight: number;
  measurementUnit: string;
  price: number;
};

type GetLabEquipmentProductsDTO = { products: GetLabEquipmentProductDTO[]; totalCount: number | null };

export type { GetLabEquipmentProductDTO, GetLabEquipmentProductsDTO };
