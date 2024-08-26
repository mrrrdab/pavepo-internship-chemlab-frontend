/* eslint-disable max-len */
import React, { useRef } from 'react';
import { Popup } from 'reactjs-popup';

import chatDarkSmallIcon from '@/assets/icons/chat-dark-sm.svg';
import arrowUpDarkSmallIcon from '@/assets/icons/arrow-up-dark-sm.svg';
import crossDarkMediumIcon from '@/assets/icons/cross-dark-md.svg';
import crossDarkSmallIcon from '@/assets/icons/cross-dark-sm.svg';

import { Button } from '../base';

type ChatPopupProps = { trigger: JSX.Element };

const ChatPopup: React.FC<ChatPopupProps> = ({ trigger }) => {
  const popupRef = useRef(null);

  const handleClose = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };

  return (
    <Popup ref={popupRef} trigger={trigger} arrow={false}>
      <div className="fixed bottom-0 right-0 border border-primary md:rounded-t-3xl w-full h-full flex flex-col md:block md:h-auto md:w-100">
        <div className="bg-primary md:rounded-t-3xl flex justify-center items-center gap-5 py-6 h-16 md:h-auto">
          <Button variant="text" className="absolute top-0 -left-1 md:-left-20" onClick={handleClose}>
            <img src={crossDarkMediumIcon} alt="Cross" className="hidden md:block" />
            <img src={crossDarkSmallIcon} alt="Cross" className="md:hidden" />
          </Button>
          <p className="text-white text-xl">Отправьте нам сообщение</p>
          <img src={chatDarkSmallIcon} alt="Chat" />
        </div>
        <div className="bg-white px-5 py-6 flex-1">
          <div className="overflow-y-auto h-[calc(100vh-12.75rem)] flex flex-col justify-end md:h-100">
            <div id="chat-box" className="flex flex-col gap-2.5">
              <p className="text-xl">Менеджер</p>
              <div className="bg-secondary rounded-xl px-5 py-2.5 w-4/5">
                <p className="text-xl opacity-90">Здравствуйте. У вас возникли вопросы? Мы с удовольствием ответим!</p>
              </div>
            </div>
          </div>
          <div className="flex items-stretch gap-3 mt-5">
            <input
              type="text"
              id="chat"
              placeholder="Введите сообщение"
              className="text-xl border-black/65 rounded-xl placeholder:text-xl placeholder:text-center h-14 md:h-auto w-full"
            />
            <Button variant="outline" borderRadius="full" className="border-black/65 p-3 h-14 md:h-auto">
              <img src={arrowUpDarkSmallIcon} alt="Arrow Up" />
            </Button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export { ChatPopup };
