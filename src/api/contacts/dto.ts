import { BusinessPremiseContact, Contact, DepartmentsContact } from '@/types';

type ContactDTO = Contact;

type GetContactsDTO = Contact[];

type GetBusinessPremiseContactDTO = BusinessPremiseContact;
type GetBusinessPremisesContactsDTO = BusinessPremiseContact[];

type DepartmentsContactDTO = DepartmentsContact;
type GetDepartmentsContactsDTO = DepartmentsContact[];

export type {
  ContactDTO,
  GetContactsDTO,
  DepartmentsContactDTO,
  GetDepartmentsContactsDTO,
  GetBusinessPremiseContactDTO,
  GetBusinessPremisesContactsDTO,
};
