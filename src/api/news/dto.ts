import { NewsItem } from '@/types';

type GetNewsItemDTO = { data: NewsItem };
type GetNewsDTO = { data: NewsItem[]; metadata: { totalCount: number } };

export type { GetNewsItemDTO, GetNewsDTO };
