import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';

import arrowLeftDarkIcon from '@/assets/icons/arrow-left-dark.svg';
import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import { getLicenses } from '@/api';
import { Button } from '@/components';

import { LicenseItem } from './LicenseItem';

const LIMIT = 10;

// TODO: Scroll buttons
const LicensesSection: React.FC = () => {
  const {
    isLoading,
    isError,
    data: licenses,
  } = useQuery(['licenses'], () => getLicenses({ limit: LIMIT }), {
    keepPreviousData: true,
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
  }, [licenses]);

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

  return (
    <section>
      <h1 className="text-5xl px-26 mb-16">Лицензии</h1>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
        </div>
      ) : isError ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-2xl">Ошибка загрузки лицензий</p>
        </div>
      ) : (
        licenses && (
          <div className="flex mx-12">
            <Button variant="text" onClick={() => handleScroll(-1)} className="flex-shrink-0 p-0">
              <img src={arrowLeftDarkIcon} alt="Arrow Left" />
            </Button>
            <div ref={scrollContainerRef} className="whitespace-nowrap overflow-x-auto scroll-smooth">
              {licenses.map((license, index) => (
                <div
                  key={license.id}
                  className="inline-block whitespace-normal w-1/6 min-h-96 pl-5"
                  ref={index === 0 ? firstItemRef : null}
                >
                  <LicenseItem image={license.image} title={license.title} />
                </div>
              ))}
            </div>
            <Button variant="text" onClick={() => handleScroll(1)} className="flex-shrink-0 p-0 ml-5">
              <img src={arrowRightDarkMediumIcon} alt="Arrow Right" />
            </Button>
          </div>
        )
      )}
    </section>
  );
};

export { LicensesSection };
