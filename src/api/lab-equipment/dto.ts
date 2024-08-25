import { Product } from '@/types';

type GetLabEquipmentProductDTO = Product;
type GetLabEquipmentProductsDTO = { products: Product[]; totalCount: number | null };

export type { GetLabEquipmentProductDTO, GetLabEquipmentProductsDTO };
