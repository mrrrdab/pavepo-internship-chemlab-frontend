import React, { useState } from 'react';

import chevronDownDarkIcon from '@/assets/icons/chevron-down-dark.svg';
import chevronUpDarkIcon from '@/assets/icons/chevron-up-dark.svg';
import languageDarkIcon from '@/assets/icons/language-dark.svg';
import { cn } from '@/utils';

import { Button } from '../base';
import { LanguageSwitchPopup } from '../popups';

type TopBarProps = { isHomePage?: boolean };

// TODO: Button Icon
const TopBar: React.FC<TopBarProps> = ({ isHomePage = false }) => {
  const [showLanguageSwitchPopup, setShowLanguageSwitchPopup] = useState(false);

  const border = isHomePage ? '' : 'border-b border-b-black';
  const paddingBottom = isHomePage ? '' : 'pb-2.5';

  return (
    <div className="hidden lg:block lg:px-20 2xl:px-26">
      <div className={cn('flex justify-between items-center py-6', border, paddingBottom)}>
        <LanguageSwitchPopup
          trigger={
            <Button
              variant="text"
              className="flex gap-2 p-0"
              onClick={() => setShowLanguageSwitchPopup(!showLanguageSwitchPopup)}
            >
              <img src={languageDarkIcon} alt="Language" />
              <p>RUS</p>
              <img src={showLanguageSwitchPopup ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
            </Button>
          }
        />
        <a href={`tel: + 7 (499) 490-51-07`} className="block text-xl hover:text-neutral-600">
          + 7 (499) 490-51-07
        </a>
      </div>
    </div>
  );
};

export { TopBar };
