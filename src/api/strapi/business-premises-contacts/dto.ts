import { GetContactDTO, GetImageDTO } from '../common';

type GetBusinessPremisesContactDTO = {
  id: number;
  label: string;
  image: GetImageDTO;
  address: string;
  phoneNumber: string;
  email?: string;
  orderPassPhoneNumbers?: GetContactDTO[];
};

export type { GetBusinessPremisesContactDTO };
