import { Image } from './image';

type Contact = { id: number; label: string; address: string; phoneNumber: string; email: string };

type OrderPassPhoneNumbers = { id: number; phoneNumber: string };
type BusinessPremiseContact = {
  id: number;
  label: string;
  image: Image;
  address: string;
  phoneNumber: string;
  email?: string;
  orderPassPhoneNumbers: OrderPassPhoneNumbers[];
};

type ExtensionPhoneNumber = { id: number; phoneNumber: string };
type DepartmentsContact = {
  id: number;
  label: string;
  phoneNumber: string;
  extensionPhoneNumbers: ExtensionPhoneNumber[];
  email: string;
};

export type { Contact, BusinessPremiseContact, DepartmentsContact };
