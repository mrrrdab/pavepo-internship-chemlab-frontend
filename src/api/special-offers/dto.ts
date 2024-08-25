import { Product } from '@/types';

type GetSpecialOfferDTO = Product;
type GetSpecialOffersDTO = { products: Product[]; totalCount: number | null };

export type { GetSpecialOfferDTO, GetSpecialOffersDTO };
