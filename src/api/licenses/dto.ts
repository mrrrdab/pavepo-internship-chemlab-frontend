type GetLicenseDTO = {
  id: string;
  imgUrl: string;
  title: string;
};

type GetLicensesDTO = GetLicenseDTO[];

export type { GetLicenseDTO, GetLicensesDTO };
