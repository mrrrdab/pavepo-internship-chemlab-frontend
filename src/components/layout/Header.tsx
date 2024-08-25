/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import chevronUpDarkIcon from '@/assets/icons/chevron-up-dark.svg';
import chevronDownDarkIcon from '@/assets/icons/chevron-down-dark.svg';
import searchDarkIcon from '@/assets/icons/search-dark.svg';
import shoppingBagDarkIcon from '@/assets/icons/shopping-bag-dark.svg';
import { ROUTES } from '@/constants';
import { cn } from '@/utils';

import { Button } from '../base';
import { CatalogPopup } from '../popups';

type HeaderProps = { isHomePage?: boolean };

// TODO: Button Icon
const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const [showCatalogPopup, setShowCatalogPopup] = useState(false);

  const { register, handleSubmit } = useForm();

  const textColor = isHomePage ? 'text-white' : '';
  const placeholderColor = isHomePage ? 'placeholder:text-white' : '';
  const borderColor = isHomePage ? 'border-white' : 'border-black';

  return (
    <header className="px-26 py-6">
      <div className="flex">
        <div className="flex items-center gap-16">
          <h4 className={cn('text-2xl font-medium uppercase hover:text-primary', textColor)}>
            <Link to={ROUTES.HOME}>Химлаб</Link>
          </h4>
          <nav>
            <ul className="flex gap-6">
              <li className="flex gap-2.5">
                <CatalogPopup
                  isHomePage={isHomePage}
                  trigger={
                    <Button
                      variant="text"
                      className="flex items-center gap-2.5 hover:bg-transparent p-0"
                      onClick={() => setShowCatalogPopup(!showCatalogPopup)}
                    >
                      <p className={cn('text-xl font-semibold hover:text-primary', textColor)}>Каталог</p>
                      <img src={showCatalogPopup ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Arrow" />
                    </Button>
                  }
                />
              </li>
              <li>
                <Link to={ROUTES.SPECIAL_OFFERS} className={cn('text-xl hover:text-primary', textColor)}>
                  Акции
                </Link>
              </li>
              <li>
                <Link to={ROUTES.DELIVERY} className={cn('text-xl hover:text-primary', textColor)}>
                  Доставка
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className={cn('text-xl hover:text-primary', textColor)}>
                  О Нас
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACTS} className={cn('text-xl hover:text-primary', textColor)}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-16">
            <form autoComplete="off" onSubmit={handleSubmit(data => console.log(data))}>
              <div className="flex gap-2">
                <div className="relative">
                  <div className={cn('absolute inset-y-0 flex items-center pl-5 pointer-events-none', textColor)}>
                    <img src={searchDarkIcon} alt="Search Icon" />
                  </div>
                  <input
                    type="text"
                    placeholder="Поиск"
                    {...register('search')}
                    className={cn(
                      'bg-transparent text-xl border rounded-lg w-100 px-13 py-2.5',
                      textColor,
                      borderColor,
                      placeholderColor,
                    )}
                  />
                </div>
                <Button type="submit" className="font-medium">
                  Найти
                </Button>
              </div>
            </form>
            <div>
              <Link to={ROUTES.SHOPPING_CART}>
                <img src={shoppingBagDarkIcon} alt="Shopping Bag" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
