import React from 'react';
import { useTranslation } from 'react-i18next';
import { Popup } from 'reactjs-popup';

import { LANGUAGES } from '@/constants';

import { Radio } from '../base';

type LanguageSwitchPopupProps = { trigger: JSX.Element };

const LanguageSwitchPopup: React.FC<LanguageSwitchPopupProps> = ({ trigger }) => {
  const { i18n } = useTranslation();

  return (
    <Popup trigger={trigger} position="bottom left">
      <div className="bg-white border-[0.5px] border-black rounded-xl flex flex-col gap-7 px-5 py-6 w-80">
        <p className="text-2xl">Выберите язык</p>
        <div className="flex flex-col gap-4">
          {LANGUAGES.map(lng => (
            <div key={lng.code} className="flex items-center gap-2.5">
              <Radio
                id={lng.code}
                name="language"
                checked={lng.code === i18n.language}
                onChange={() => i18n.changeLanguage(lng.code)}
              />
              <label htmlFor={lng.code} className="text-xl cursor-pointer">
                {lng.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export { LanguageSwitchPopup };
