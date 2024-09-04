import { GetButtonDTO, GetImageDTO } from '../common';

type GetSuppliersSectionDTO = {
  title: string;
  description: string;
  supplierItems: GetSupplierItemDTO[];
  button: GetButtonDTO;
};

type GetSupplierItemDTO = {
  id: number;
  logo: GetImageDTO;
};

export type { GetSuppliersSectionDTO, GetSupplierItemDTO };
