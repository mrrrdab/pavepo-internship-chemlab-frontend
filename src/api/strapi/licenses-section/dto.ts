import { GetImageDTO } from '../common';

type GetLicensesSectionDTO = {
  title: string;
  licenses: GetLicenseDTO[];
};

type GetLicenseDTO = {
  id: number;
  title: string;
  image: GetImageDTO;
};

export type { GetLicensesSectionDTO, GetLicenseDTO };
