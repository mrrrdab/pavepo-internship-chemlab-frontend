import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import arrowLeftDarkIcon from '@/assets/icons/arrow-left-dark.svg';
import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import { getLicensesSection } from '@/api';
import { Button, Loader } from '@/components';

import { LicenseItem } from './LicenseItem';

const LicensesSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: licensesSection,
    isError,
    isLoading,
  } = useQuery(['licenses-section', i18n.language], () => getLicensesSection(i18n.language), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemWidth = () => {
      if (firstItemRef.current) {
        setItemWidth(firstItemRef.current.getBoundingClientRect().width);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => {
      window.removeEventListener('resize', updateItemWidth);
    };
  }, [licensesSection]);

  const handleScroll = (offset: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      const newScrollPosition = container.scrollLeft + offset * itemWidth;

      if (newScrollPosition < 0) {
        container.scrollLeft = 0;
      } else if (newScrollPosition > scrollWidth - containerWidth) {
        container.scrollLeft = scrollWidth - containerWidth;
      } else {
        container.scrollLeft = newScrollPosition;
      }
    }
  };

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !licensesSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="hidden xs:block">
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16">
        {licensesSection.title}
      </h1>
      <div className="flex mx-8 2xl:mx-12">
        <Button variant="text" onClick={() => handleScroll(-1)} className="hidden md:block flex-shrink-0 p-0">
          <img src={arrowLeftDarkIcon} alt="Arrow Left" />
        </Button>
        <div ref={scrollContainerRef} className="whitespace-nowrap overflow-x-auto scroll-smooth">
          {licensesSection.licenses.map((license, index) => (
            <div
              key={license.id}
              className="inline-block whitespace-normal xs:w-1/2 sm:w-1/3 lg:w-1/4 2xl:w-1/6 min-h-96 pl-5"
              ref={index === 0 ? firstItemRef : null}
            >
              <LicenseItem image={license.image} title={license.title} />
            </div>
          ))}
        </div>
        <Button variant="text" onClick={() => handleScroll(1)} className="hidden md:block flex-shrink-0 p-0 ml-5">
          <img src={arrowRightDarkMediumIcon} alt="Arrow Right" />
        </Button>
      </div>
    </section>
  );
};

export { LicensesSection };
