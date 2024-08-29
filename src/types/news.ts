import { Image } from './image';

type NewsItem = { id: number; title: string; date: Date; images: Image[]; content: string };

export type { NewsItem };
