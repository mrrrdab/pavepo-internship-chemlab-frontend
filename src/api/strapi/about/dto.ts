import { GetImageDTO } from '../common';

type GetAboutDTO = {
  title: string;
  images: GetImageDTO[];
  info: GetAboutInfoDTO[];
};

type GetAboutInfoDTO = {
  id: number;
  content: string;
};

export type { GetAboutDTO, GetAboutInfoDTO };
