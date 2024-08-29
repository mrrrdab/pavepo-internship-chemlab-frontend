import { License } from '@/types';

type GetLicenseDTO = { data: License };

type GetLicensesDTO = { data: License[]; metadata: { totalCount: number } };

export type { GetLicenseDTO, GetLicensesDTO };
