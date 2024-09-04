import { GetImageDTO } from '../common';

type GetPartnersSectionDTO = {
  title: string;
  partners: GetPartnerDTO[];
};

type GetPartnerDTO = {
  id: number;
  image: GetImageDTO;
};

export type { GetPartnersSectionDTO, GetPartnerDTO };
