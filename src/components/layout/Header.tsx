/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@components/common/Button';
import arrowDownIcon from '@assets/icons/arrow-down.svg';
import searchIcon from '@assets/icons/search.svg';
import shoppingBagIcon from '@assets/icons/shopping-bag.svg';

type HeaderProps = { isHomePage?: boolean };

// TODO: Sticky
const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const textColor = isHomePage ? 'text-white' : '';
  const placeholderColor = isHomePage ? 'placeholder:text-white' : '';
  const borderColor = isHomePage ? 'border-white' : 'border-black';

  return (
    <header className="px-26 py-6">
      <div className="flex">
        <div className="flex items-center gap-16">
          <h4 className={`text-2xl font-medium uppercase ${textColor} hover:text-primary`}>
            <Link to="/">Химлаб</Link>
          </h4>
          <nav>
            <ul className="flex gap-6">
              <li className="flex gap-2.5">
                <Button variant="text" className="flex items-center gap-2.5 p-0">
                  <p className={`${textColor} text-xl font-semibold`}>Каталог</p>
                  <img src={arrowDownIcon} alt="Arrow Down" />
                </Button>
              </li>
              <li>
                <Link to="/catalog/lab-equipment" className={`${textColor} text-xl hover:text-primary`}>
                  Акции
                </Link>
              </li>
              <li>
                <Link to="/delivery" className={`${textColor} text-xl hover:text-primary`}>
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/about" className={`${textColor} text-xl hover:text-primary`}>
                  О Нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className={`${textColor} text-xl hover:text-primary`}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-16">
            <form>
              <div className="flex gap-2">
                <div className="relative">
                  <div className={`absolute inset-y-0 flex items-center pl-5 pointer-events-none ${textColor}`}>
                    <img src={searchIcon} alt="Search Icon" />
                  </div>
                  <input
                    type="text"
                    name="search"
                    placeholder="Поиск"
                    className={`bg-transparent text-xl border ${borderColor} rounded-lg ${placeholderColor} px-13 py-2.5`}
                  />
                </div>
                <Button type="submit" className="font-medium">
                  Найти
                </Button>
              </div>
            </form>
            <div>
              <Link to="/shopping-cart">
                <img src={shoppingBagIcon} alt="Shopping Bag" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
