import { useEffect, useRef, useState } from 'react';

// TODO: Scroll width
import arrowLeftIcon from '@assets/icons/arrow-left-black.svg';
import arrowRightIcon from '@assets/icons/arrow-right-black-md.svg';
import { getLicenses, GetLicensesDTO } from '@/api/licenses';
import { Button } from '@/components';

import { LicenseItem } from './LicenseItem';

const SCROLL_OFFSET = 200;

const LicensesSection = () => {
  const [licenses, setLicenses] = useState<GetLicensesDTO>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const fetchedLicenses = await getLicenses();
        setLicenses(fetchedLicenses);
      } catch (error) {
        console.error('Failed to fetch licenses:', error);
      }
    };

    fetchLicenses();
  }, []);

  const handleScroll = (offset: number) => {
    const newScrollPosition = scrollPosition + offset;
    setScrollPosition(newScrollPosition);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = newScrollPosition;
    }
  };

  return (
    <section>
      <h1 className="text-5xl px-26 mb-16">Лицензии</h1>
      <div className="flex mx-12">
        <Button variant="text" onClick={() => handleScroll(-SCROLL_OFFSET)} className="flex-shrink-0 p-0">
          <img src={arrowLeftIcon} alt="Arrow Left" />
        </Button>
        <div ref={scrollContainerRef} className="whitespace-nowrap overflow-x-auto scroll-smooth">
          {licenses.map(license => (
            <div key={license.id} className="inline-block whitespace-normal w-1/6 pl-5">
              <LicenseItem imgUrl={license.imgUrl} title={license.title} />
            </div>
          ))}
        </div>
        <Button variant="text" onClick={() => handleScroll(SCROLL_OFFSET)} className="flex-shrink-0 p-0 ml-5">
          <img src={arrowRightIcon} alt="Arrow Right" />
        </Button>
      </div>
    </section>
  );
};

export { LicensesSection };
