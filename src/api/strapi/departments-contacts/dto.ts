import { GetContactDTO } from '../common';

type GetDepartmentsContactDTO = {
  id: number;
  label: string;
  phoneNumber: string;
  extensionPhoneNumbers: GetContactDTO[];
  email: string;
};

export type { GetDepartmentsContactDTO };
