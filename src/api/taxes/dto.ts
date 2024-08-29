import { Tax } from '@/types';

type GetTaxDTO = { data: Tax };
type GetTaxesDTO = { data: Tax[]; metadata: { totalCount: number } };

export type { GetTaxDTO, GetTaxesDTO };
