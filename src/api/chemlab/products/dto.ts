import { GetFileDTO, GetImageDTO } from '../common';

type Product = {
  id: number;
  category: GetCategoryDTO;
  productType: string;
  model: string;
  manufacturer: string;
  originCountries: string[];
  description: string;
  price: number;
  discount: number;
  weight: number;
  color: string;
  images: GetImageDTO[];
  advantages: GetAdvantageDTO[];
  specs: GetSpecDTO[];
  files: GetFileDTO[];
  accessories: GetAccessoryDTO[];
  transportationData: GetTransportationDTO[];
};

enum GetCategoryDTO {
  ANALYTICAL_EQUIPMENT,
  BIOCHEMISTRY_BIOTECHNOLOGY,
  CLINIC_DIAGNOSTICS,
  CONSUMABLES,
  COSMECEUTICALS,
  LAB_EQUIPMENT,
  LIFE_SCIENCE_EQUIPMENT,
  MICROELECTRONICS,
  PHARMACEUTICALS,
  REAGENTS_STANDARTS,
  SPECIAL_OFFERS,
  SUPPLIERS,
  VETERINARY,
  WAREHOUSE,
}

type GetAdvantageDTO = { id: number; label: string; content: string };
type GetSpecDTO = { id: number; spec: string; value: string; measurementUnit?: string };
type GetAccessoryDTO = { id: number; name: string; quantity?: number };
type GetTransportationDTO = { id: number; name: string; value: string; measurementUnit?: string };

type GetProductDTO = { data: Product };
type GetProductsDTO = { data: Product[]; metadata: { totalCount: number } };

type GetAggregatedInfoDTO = {
  data: {
    priceRange: {
      min: number;
      max: number;
    };
    manufacturers: string[];
    weights: number[];
    colors: string[];
  };
};

export { GetCategoryDTO };
export type { GetProductDTO, GetProductsDTO, GetAggregatedInfoDTO };
