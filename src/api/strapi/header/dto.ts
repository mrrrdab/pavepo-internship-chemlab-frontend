import { GetButtonDTO, GetLinkDTO } from '../common';

type GetHeaderDTO = {
  title: string;
  url: string;
  navLinks: GetLinkDTO[];
  catalogButton: GetButtonDTO;
  cartLink: GetLinkDTO;
};

export type { GetHeaderDTO };
