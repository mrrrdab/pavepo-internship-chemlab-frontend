import { GetButtonDTO, GetImageDTO } from '../common';

type GetHeroBlockDTO = {
  title: string;
  image: GetImageDTO;
  subtitles: GetHeroBlockSubtitlesDTO[];
  buttons: GetButtonDTO[];
};

type GetHeroBlockSubtitlesDTO = {
  id: number;
  title: string;
  content: string;
};

export type { GetHeroBlockDTO };
