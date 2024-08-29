/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import menuDarkIcon from '@/assets/icons/menu-dark.svg';
import menuWhiteIcon from '@/assets/icons/menu-white.svg';
import chevronUpDarkIcon from '@/assets/icons/chevron-up-dark.svg';
import chevronDownDarkIcon from '@/assets/icons/chevron-down-dark.svg';
import searchWhiteSmallIcon from '@/assets/icons/search-white-sm.svg';
import searchWhiteMediumIcon from '@/assets/icons/search-white-md.svg';
import searchDarkSmallIcon from '@/assets/icons/search-dark-sm.svg';
import searchDarkMediumIcon from '@/assets/icons/search-dark-md.svg';
import shoppingBagDarkIcon from '@/assets/icons/shopping-bag-dark.svg';
import { ROUTES } from '@/constants';
import { cn } from '@/utils';

import { Button } from '../base';
import { CatalogPopup, NavPopup } from '../popups';

type HeaderProps = { isHomePage?: boolean };

// TODO: Button Icon
const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const [showCatalogPopup, setShowCatalogPopup] = useState(false);

  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm();

  const textColor = isHomePage ? 'text-white' : '';
  const placeholderColor = isHomePage ? 'placeholder:text-white' : '';
  const borderColor = isHomePage ? 'border-white' : 'border-black';

  const menuIcon = isHomePage ? menuWhiteIcon : menuDarkIcon;

  const searchSmallIcon = isHomePage ? searchWhiteSmallIcon : searchDarkSmallIcon;
  const searchMeduimIcon = isHomePage ? searchWhiteMediumIcon : searchDarkMediumIcon;

  return (
    <header className="px-8 md:px-14 lg:px-20 2xl:px-26 py-6 mt-6 lg:mt-0">
      <div className="flex flex-col gap-8 2xl:flex-row 2xl:gap-0">
        <div className="flex flex-col gap-2.5 xs:flex-row xs:justify-between xs:items-center lg:gap-16">
          <h4 className={cn('text-2xl font-medium uppercase hover:text-primary', textColor)}>
            <Link to={ROUTES.HOME}>Химлаб</Link>
          </h4>
          <nav className="hidden lg:block lg:w-max">
            <ul className="flex items-center gap-6">
              <li>
                <CatalogPopup
                  isHomePage={isHomePage}
                  trigger={
                    <Button
                      variant="text"
                      className="flex items-center gap-2.5 hover:bg-transparent p-0"
                      onClick={() => setShowCatalogPopup(!showCatalogPopup)}
                    >
                      <p className={cn('text-xl font-semibold hover:text-primary', textColor)}>Каталог</p>
                      <img src={showCatalogPopup ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                    </Button>
                  }
                />
              </li>
              <li>
                <Link to={ROUTES.SPECIAL_OFFERS} className={cn('block text-xl hover:text-primary', textColor)}>
                  Акции
                </Link>
              </li>
              <li>
                <Link to={ROUTES.DELIVERY} className={cn('block text-xl hover:text-primary', textColor)}>
                  Доставка
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className={cn('block text-xl hover:text-primary w-fit', textColor)}>
                  О Нас
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACTS} className={cn('block text-xl hover:text-primary', textColor)}>
                  Контакты
                </Link>
              </li>
              <li className="hidden md:block 2xl:hidden">
                <Link to={ROUTES.SHOPPING_CART}>
                  <img src={shoppingBagDarkIcon} alt="Shopping Bag" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mx-auto xs:mx-0 lg:hidden">
            <NavPopup
              trigger={
                <Button variant="text" className="p-0">
                  <img src={menuIcon} alt="Menu" />
                </Button>
              }
            />
          </div>
        </div>
        <div className="lg:flex lg:items-center 2xl:gap-12 lg:ml-auto 3xl:gap-16">
          <form autoComplete="off" onSubmit={handleSubmit(data => console.log(data))} className="w-full">
            <div className="w-full lg:flex lg:gap-2">
              <div className="relative">
                <div className={cn('absolute inset-y-0 flex items-center pl-5 pointer-events-none', textColor)}>
                  <img src={searchMeduimIcon} alt="Search Icon" className="hidden md:block" />
                  <img src={searchSmallIcon} alt="Search Icon" className="md:hidden" />
                </div>
                <input
                  type="text"
                  placeholder="Поиск"
                  {...register('search')}
                  className={cn(
                    'bg-transparent text-base 2xl:text-xl border rounded-lg w-full 2xl:w-96 3xl:w-100 px-13 md:px-16 py-2.5',
                    textColor,
                    borderColor,
                    placeholderColor,
                  )}
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hidden lg:block font-medium">
                Найти
              </Button>
            </div>
          </form>
          <Link to={ROUTES.SHOPPING_CART} className="hidden 2xl:block 2xl:flex-shrink-0">
            <img src={shoppingBagDarkIcon} alt="Shopping Bag" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
