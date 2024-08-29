import { BusinessPremiseContact, Contact, DepartmentsContact } from '@/types';

type ContactDTO = { data: Contact };
type GetContactsDTO = { data: Contact[]; metadata: { totalCount: number } };

type GetBusinessPremiseContactDTO = { data: BusinessPremiseContact };
type GetBusinessPremisesContactsDTO = { data: BusinessPremiseContact[]; metadata: { totalCount: number } };

type DepartmentsContactDTO = { data: DepartmentsContact };
type GetDepartmentsContactsDTO = { data: DepartmentsContact[]; metadata: { totalCount: number } };

export type {
  ContactDTO,
  GetContactsDTO,
  DepartmentsContactDTO,
  GetDepartmentsContactsDTO,
  GetBusinessPremiseContactDTO,
  GetBusinessPremisesContactsDTO,
};
