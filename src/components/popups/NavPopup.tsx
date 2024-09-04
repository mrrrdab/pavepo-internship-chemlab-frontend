/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Popup } from 'reactjs-popup';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import languageDarkIcon from '@/assets/icons/language-dark.svg';
import crossDarkSmallIcon from '@/assets/icons/cross-dark-sm.svg';
import { getHeader, getTopBar } from '@/api';
import { LANGUAGES } from '@/constants';

import { Button } from '../base';
import { Loader } from '../Loader';

type NavPopupProps = { trigger: JSX.Element };

const NavPopup: React.FC<NavPopupProps> = ({ trigger }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(
    LANGUAGES.findIndex(lang => lang.code === i18n.language),
  );

  const {
    data: navData,
    isLoading,
    isError,
  } = useQuery(['nav-data', i18n.language], () => getHeader(i18n.language), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const {
    data: topBarData,
    isLoading: isLoadingTopBarData,
    isError: isErrorTopBarData,
  } = useQuery(['top-bar'], () => getTopBar(), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const popupRef = useRef(null);

  const handleClose = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };

  const handleChangeLanguage = () => {
    const nextIndex = (currentLanguageIndex + 1) % LANGUAGES.length;
    setCurrentLanguageIndex(nextIndex);
    const nextLanguage = LANGUAGES[nextIndex].code;
    i18n.changeLanguage(nextLanguage);
  };

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !navData) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <Popup ref={popupRef} trigger={trigger} arrow={false}>
      <div className="fixed top-0 right-0 bg-white border border-black rounded-b-xl flex flex-col justify-between w-full xs:w-64 md:w-100 h-104 p-8">
        <Button variant="text" className="absolute top-0 right-0" onClick={handleClose}>
          <img src={crossDarkSmallIcon} alt="Cross" />
        </Button>
        <nav>
          <ul className="flex flex-col gap-5 mt-5">
            <li>
              <Link to={navData.cartLink.url} className="text-xl font-medium hover:text-primary">
                {navData.cartLink.label}
              </Link>
            </li>
            <li>
              <Link to={navData.catalogButton.url} className="text-xl hover:text-primary">
                {navData.catalogButton.label}
              </Link>
            </li>
            {navData.navLinks.map(link => (
              <li key={link.id}>
                <Link to={link.url} className="text-xl hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isLoadingTopBarData ? (
          <div className="w-fit mx-auto">
            <Loader />
          </div>
        ) : isErrorTopBarData || !topBarData ? (
          <div className="w-fit mx-auto">
            <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <Button variant="text" className="flex items-center gap-2 p-0 w-fit" onClick={handleChangeLanguage}>
              <img src={languageDarkIcon} alt="Language" />
              <p className="uppercase">{LANGUAGES[currentLanguageIndex].shortCode}</p>
            </Button>
            <a href={`tel: ${topBarData.contact.phoneNumber}`} className="block text-xl hover:text-neutral-600">
              {topBarData.contact.phoneNumber}
            </a>
          </div>
        )}
      </div>
    </Popup>
  );
};

export { NavPopup };
