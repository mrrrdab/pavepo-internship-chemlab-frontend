import React from 'react';

import whatsappIcon from '@/assets/icons/whatsapp.svg';
import vkIcon from '@/assets/icons/vk.svg';
import zenIcon from '@/assets/icons/zen.svg';
import telegramIcon from '@/assets/icons/telegram.svg';

import { Button } from '../base';

const Footer: React.FC = () => {
  return (
    <footer className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <div className="flex flex-col">
        <div className="mb-5">
          <h4 className="text-2xl 2xl:text-3xl font-medium uppercase">Химлаб</h4>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-13">
          <div className="flex-1 flex flex-col gap-2 overflow-hidden">
            <p className="text-base 2xl:text-xl">Адрес</p>
            <p className="opacity-90 text-base 2xl:text-xl">
              115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4/9 (территория бизнес-центра &quot;Сириус
              Парк&quot;), ООО ТД “ХИМЛАБ”.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="opacity-90 text-base 2xl:text-xl">Контакты</p>
            <div className="flex flex-col gap-5">
              <div className="text-black text-base 2xl:text-xl flex flex-col gap-0 md:flex-row md:gap-2">
                <a href={`tel: +7 (499) 113-02-84`} className="hover:text-neutral-600">
                  +7 (499) 113-02-84
                </a>
                <p className="opacity-50">(Москва)</p>
              </div>
              <div className="text-black text-base 2xl:text-xl flex flex-col gap-0 md:flex-row md:gap-2">
                <a href={`tel: +7 (812) 605-00-61`} className="hover:text-neutral-600">
                  +7 (812) 605-00-61
                </a>
                <p className="opacity-50">(Санкт-Петербург)</p>
              </div>
            </div>
          </div>
          <div className="w-fit lg:ml-auto">
            <div className="hidden xs:flex xs:justify-end xs:items-center xs:gap-5">
              <Button variant="text" className="flex-shrink-0 p-0">
                <img src={whatsappIcon} alt="WhatsApp" />
              </Button>
              <Button variant="text" className="flex-shrink-0 p-0">
                <img src={vkIcon} alt="VK" />
              </Button>
              <Button variant="text" className="flex-shrink-0 p-0">
                <img src={zenIcon} alt="Zen" />
              </Button>
              <Button variant="text" className="flex-shrink-0 p-0">
                <img src={telegramIcon} alt="Telegram" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
