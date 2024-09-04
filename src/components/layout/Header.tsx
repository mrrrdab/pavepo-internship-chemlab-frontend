/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

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
import { useDebounce, useSearch } from '@/hooks';
import { cn } from '@/utils';
import { getHeader } from '@/api';

import { Button } from '../base';
import { CatalogPopup, NavPopup, ProductsSearchPopup } from '../popups';
import { Loader } from '../Loader';

type SearchFormData = { search: string };

type HeaderProps = { isHomePage?: boolean };

// TODO: Button Icon
const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const [showCatalogPopup, setShowCatalogPopup] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearch();

  const { i18n, t } = useTranslation();

  const {
    register,
    watch,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<SearchFormData>({
    defaultValues: { search: searchQuery },
  });

  const searchQueryForm = watch('search');
  const { ref, ...searchInputProps } = register('search');
  const debouncedSearchQuery = useDebounce(searchQueryForm, 500);

  const {
    data: headerData,
    isLoading,
    isError,
  } = useQuery(['header-data', i18n.language], () => getHeader(i18n.language), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const onSubmit = (data: SearchFormData) => {
    setSearchQuery(data.search);
    const queryParams = new URLSearchParams({ searchParams: data.search }).toString();
    navigate(`${ROUTES.PRODUCTS_SEARCH}?${queryParams}`);
  };

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !headerData) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

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
            <Link to={headerData.url}>{headerData.title}</Link>
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
                      <p className={cn('text-xl font-semibold hover:text-primary', textColor)}>
                        {headerData.catalogButton.label}
                      </p>
                      <img src={showCatalogPopup ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                    </Button>
                  }
                />
              </li>
              {headerData.navLinks.map(link => (
                <li key={link.id}>
                  <Link to={link.url} className={cn('block text-xl hover:text-primary', textColor)}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="hidden md:block 2xl:hidden">
                <Link to={headerData.cartLink.url}>
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
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="relative w-full">
            <div className="w-full lg:flex lg:gap-2">
              <div className="relative">
                <div className={cn('absolute inset-y-0 flex items-center pl-5 pointer-events-none', textColor)}>
                  <img src={searchMeduimIcon} alt="Search Icon" className="hidden md:block" />
                  <img src={searchSmallIcon} alt="Search Icon" className="md:hidden" />
                </div>
                <input
                  type="text"
                  placeholder="Flocculator, JT-M6C"
                  {...searchInputProps}
                  ref={e => {
                    ref(e);
                    inputRef.current = e;
                  }}
                  className={cn(
                    'bg-transparent text-base 2xl:text-xl border rounded-lg w-full 2xl:w-96 3xl:w-100 px-13 md:px-16 py-2.5',
                    textColor,
                    borderColor,
                    placeholderColor,
                  )}
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hidden lg:block font-medium">
                {t('global_search_form.submit_button')}
              </Button>
            </div>
            <ProductsSearchPopup
              open={Boolean(inputRef.current === document.activeElement && debouncedSearchQuery.trim())}
              isHomePage={isHomePage}
              searchQuery={debouncedSearchQuery}
            />
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
