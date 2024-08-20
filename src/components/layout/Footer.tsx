import whatsappIcon from '@assets/icons/whatsapp.svg';
import vkIcon from '@assets/icons/vk.svg';
import zenIcon from '@assets/icons/zen.svg';
import telegramIcon from '@assets/icons/telegram.svg';
// import chatIcon from '@assets/icons/chat.svg';

import { Button } from '../common';

const Footer = () => {
  return (
    <footer className="px-26 pb-28">
      <div className="flex flex-col">
        <div className="mb-5">
          <h4 className="text-neutral-900 text-3xl font-medium uppercase">Химлаб</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-13">
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-neutral-900 text-xl">Адрес</p>
              <p className="text-neutral-900/90 text-xl">
                115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4/9 (территория бизнес-центра &quot;Сириус
                Парк&quot;), ООО ТД “ХИМЛАБ”.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-neutral-900/90 text-xl">Контакты</p>
              <div className="flex flex-col gap-5">
                <p className="text-black text-xl">
                  +7 (499) 113-02-84 <span className="opacity-50">(Москва)</span>
                </p>
                <p className="text-black text-xl">
                  +7 (812) 605-00-61 <span className="opacity-50">(Санкт-Петербург)</span>
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-end items-center gap-5">
                <Button variant="ghost" className="p-0">
                  <img src={whatsappIcon} alt="WhatsApp" />
                </Button>
                <Button variant="ghost" className="p-0">
                  <img src={vkIcon} alt="VK" />
                </Button>
                <Button variant="ghost" className="p-0">
                  <img src={zenIcon} alt="Zen" />
                </Button>
                <Button variant="ghost" className="p-0">
                  <img src={telegramIcon} alt="Telegram" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
