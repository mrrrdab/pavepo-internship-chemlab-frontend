import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import whatsappIcon from '@/assets/icons/whatsapp.svg';
import vkIcon from '@/assets/icons/vk.svg';
import zenIcon from '@/assets/icons/zen.svg';
import telegramIcon from '@/assets/icons/telegram.svg';
import { getFooter } from '@/api';

import { Loader } from '../Loader';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: footerData,
    isLoading,
    isError,
  } = useQuery(['footer', i18n.language], () => getFooter(i18n.language), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !footerData) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <footer className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <div className="flex flex-col">
        <div className="mb-5">
          <h4 className="text-2xl 2xl:text-3xl font-medium uppercase">{footerData.title}</h4>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-13">
          <div className="flex-1 flex flex-col gap-2 overflow-hidden">
            <p className="text-base 2xl:text-xl">{t('contacts.address')}</p>
            <p className="opacity-90 text-base 2xl:text-xl">{footerData.address}</p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="opacity-90 text-base 2xl:text-xl">{t('contacts.contacts')}</p>
            <div className="flex flex-col gap-5">
              {footerData.contacts.map(contact => (
                <div
                  key={contact.id}
                  className="text-black text-base 2xl:text-xl flex flex-col gap-0 md:flex-row md:gap-2"
                >
                  <a href={`tel: ${contact.phoneNumber}`} className="hover:text-neutral-600">
                    {contact.phoneNumber}
                  </a>
                  {contact.details && <p className="opacity-50">{contact.details}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="w-fit lg:ml-auto self-center">
            <div className="hidden xs:flex xs:justify-end xs:items-center xs:gap-5">
              <a href={footerData.whatsappLink.url} className="flex-shrink-0 p-0">
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
              <a href={footerData.vkLink.url} className="flex-shrink-0 p-0">
                <img src={vkIcon} alt="VK" />
              </a>
              <a href={footerData.yandexZenLink.url} className="flex-shrink-0 p-0">
                <img src={zenIcon} alt="Zen" />
              </a>
              <a href={footerData.telegramLink.url} className="flex-shrink-0 p-0">
                <img src={telegramIcon} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
