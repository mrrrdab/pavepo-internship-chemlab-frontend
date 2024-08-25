import React from 'react';

import whatsappIcon from '@/assets/icons/whatsapp.svg';
import vkIcon from '@/assets/icons/vk.svg';
import zenIcon from '@/assets/icons/zen.svg';
import telegramIcon from '@/assets/icons/telegram.svg';

import { Button } from '../base';

const Footer: React.FC = () => {
  return (
    <footer className="px-26 pb-28">
      <div className="flex flex-col">
        <div className="mb-5">
          <h4 className="text-3xl font-medium uppercase">Химлаб</h4>
        </div>
        <div className="flex items-center gap-13">
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-xl">Адрес</p>
            <p className="opacity-90 text-xl">
              115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4/9 (территория бизнес-центра &quot;Сириус
              Парк&quot;), ООО ТД “ХИМЛАБ”.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="opacity-90 text-xl">Контакты</p>
            <div className="flex flex-col gap-5">
              <p className="text-black text-xl">
                +7 (499) 113-02-84 <span className="opacity-50">(Москва)</span>
              </p>
              <p className="text-black text-xl">
                +7 (812) 605-00-61 <span className="opacity-50">(Санкт-Петербург)</span>
              </p>
            </div>
          </div>
          <div className="w-fit ml-auto">
            <div className="flex justify-end items-center gap-5">
              <Button variant="text" className="p-0">
                <img src={whatsappIcon} alt="WhatsApp" />
              </Button>
              <Button variant="text" className="p-0">
                <img src={vkIcon} alt="VK" />
              </Button>
              <Button variant="text" className="p-0">
                <img src={zenIcon} alt="Zen" />
              </Button>
              <Button variant="text" className="p-0">
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
