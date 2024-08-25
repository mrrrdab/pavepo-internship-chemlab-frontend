/* eslint-disable max-len */
import React from 'react';
import { Popup } from 'reactjs-popup';

import { Radio } from '../base/Radio';

type LanguageSwitchPopupProps = { trigger: JSX.Element };

const LanguageSwitchPopup: React.FC<LanguageSwitchPopupProps> = ({ trigger }) => {
  return (
    <Popup trigger={trigger} position="bottom left">
      <div className="bg-white border-[0.5px] rounded-xl flex flex-col gap-7 px-5 py-6 w-80">
        <p className="text-2xl">Выберите язык</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <Radio id="rusLanguage" name="language" />
            <label htmlFor="rusLanguage" className="text-xl cursor-pointer">
              Русский
            </label>
          </div>
          <div className="flex items-center gap-2.5">
            <Radio id="enLanguage" name="language" />
            <label htmlFor="enLanguage" className="text-xl cursor-pointer">
              English
            </label>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export { LanguageSwitchPopup };
