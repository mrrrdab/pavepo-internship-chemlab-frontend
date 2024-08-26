/* eslint-disable max-len */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Popup } from 'reactjs-popup';

import crossDarkSmallIcon from '@/assets/icons/cross-dark-sm.svg';
import { ROUTES } from '@/constants';

import { Button } from '../base';

type NavPopupProps = { trigger: JSX.Element };

const NavPopup: React.FC<NavPopupProps> = ({ trigger }) => {
  const popupRef = useRef(null);

  const handleClose = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };

  return (
    <Popup ref={popupRef} trigger={trigger} arrow={false}>
      <div className="fixed top-0 right-0 bg-white border border-black rounded-b-xl flex flex-col justify-between w-full xs:w-64 md:w-100 h-104 p-8">
        <Button variant="text" className="absolute top-0 right-0" onClick={handleClose}>
          <img src={crossDarkSmallIcon} alt="Cross" />
        </Button>
        <nav>
          <ul className="flex flex-col gap-5 mt-5">
            <li>
              <Link to={ROUTES.SHOPPING_CART} className="text-xl font-medium hover:text-primary">
                Корзина
              </Link>
            </li>
            <li>
              <Link to={ROUTES.LAB_EQUIPMENT} className="text-xl hover:text-primary">
                Каталог
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SPECIAL_OFFERS} className="text-xl hover:text-primary">
                Акции
              </Link>
            </li>
            <li>
              <Link to={ROUTES.DELIVERY} className="text-xl hover:text-primary">
                Доставка
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT} className="text-xl hover:text-primary">
                О Нас
              </Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACTS} className="text-xl hover:text-primary">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-5">
          <a href={`tel: + 7 (499) 490-51-07`} className="block text-xl hover:text-neutral-600">
            + 7 (499) 490-51-07
          </a>
        </div>
      </div>
    </Popup>
  );
};

export { NavPopup };
