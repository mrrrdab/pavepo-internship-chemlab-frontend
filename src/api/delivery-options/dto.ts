import { DeliveryOption } from '@/types';

type GetDelivereyOptionDTO = { data: DeliveryOption };

type GetDelivereyOptionsDTO = { data: DeliveryOption[]; metadata: { totalCount: number } };

export type { GetDelivereyOptionDTO, GetDelivereyOptionsDTO };
