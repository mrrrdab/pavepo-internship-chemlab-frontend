import { GetContactDTO, GetLinkDTO } from '../common';

type GetFooterDTO = {
  title: string;
  address: string;
  contacts: GetContactDTO[];
  whatsappLink: GetLinkDTO;
  vkLink: GetLinkDTO;
  yandexZenLink: GetLinkDTO;
  telegramLink: GetLinkDTO;
};

export type { GetFooterDTO };
