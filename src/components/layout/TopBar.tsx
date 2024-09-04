import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import chevronDownDarkIcon from '@/assets/icons/chevron-down-dark.svg';
import chevronUpDarkIcon from '@/assets/icons/chevron-up-dark.svg';
import languageDarkIcon from '@/assets/icons/language-dark.svg';
import { cn } from '@/utils';
import { getTopBar } from '@/api';
import { LANGUAGES } from '@/constants';

import { Button } from '../base';
import { LanguageSwitchPopup } from '../popups';
import { Loader } from '../Loader';

type TopBarProps = { isHomePage?: boolean };

// TODO: Button Icon
const TopBar: React.FC<TopBarProps> = ({ isHomePage = false }) => {
  const [showLanguageSwitchPopup, setShowLanguageSwitchPopup] = useState(false);
  const { t, i18n } = useTranslation();

  const {
    data: topBarData,
    isLoading,
    isError,
  } = useQuery(['top-bar'], () => getTopBar(), {
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

  if (isError || !topBarData) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  const border = isHomePage ? '' : 'border-b border-b-black';
  const paddingBottom = isHomePage ? '' : 'pb-2.5';

  return (
    <div className="hidden lg:block lg:px-20 2xl:px-26">
      <div className={cn('flex justify-between items-center py-6', border, paddingBottom)}>
        <LanguageSwitchPopup
          trigger={
            <Button
              variant="text"
              className="flex items-center gap-2 p-0"
              onClick={() => setShowLanguageSwitchPopup(!showLanguageSwitchPopup)}
            >
              <img src={languageDarkIcon} alt="Language" />
              <p className="uppercase">{LANGUAGES.find(lang => lang.code === i18n.language)!.shortCode}</p>
              <img src={showLanguageSwitchPopup ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
            </Button>
          }
        />
        <a href={`tel: ${topBarData.contact.phoneNumber}`} className="block text-xl hover:text-neutral-600">
          {topBarData.contact.phoneNumber}
        </a>
      </div>
    </div>
  );
};

export { TopBar };
