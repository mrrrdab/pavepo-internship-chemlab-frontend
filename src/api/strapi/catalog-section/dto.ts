import { GetButtonDTO, GetImageDTO } from '../common';

type GetCatalogSectionDTO = {
  title: string;
  catalogImages: GetImageDTO[];
  button: GetButtonDTO;
};

export type { GetCatalogSectionDTO };
