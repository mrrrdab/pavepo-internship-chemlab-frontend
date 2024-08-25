type Contact = { id: string; label: string; address: string; phoneNumber: string; email: string };

type OrderPassPhoneNumbers = { id: string; phone: string };
type BusinessPremiseContact = {
  id: string;
  label: string;
  image: string;
  address: string;
  phoneNumber: string;
  email?: string;
  orderPassPhoneNumbers?: OrderPassPhoneNumbers[];
};

type ExtensionPhoneNumber = { id: string; phone: string };
type DepartmentsContact = {
  id: string;
  label: string;
  phoneNumber: string;
  extensionPhoneNumbers: ExtensionPhoneNumber[];
  email: string;
};

export type { Contact, BusinessPremiseContact, DepartmentsContact };
