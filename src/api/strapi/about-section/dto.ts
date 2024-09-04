import { GetButtonDTO, GetImageDTO } from '../common';

type GetAboutSectionDTO = {
  title: string;
  image: GetImageDTO;
  content: string;
  aboutStats: GetAboutStatsItemDTO[];
  button: GetButtonDTO;
};

type GetAboutStatsItemDTO = {
  id: number;
  stat: string;
  label: string;
};

export type { GetAboutSectionDTO, GetAboutStatsItemDTO };
