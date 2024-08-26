/* eslint-disable max-len */
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import { ROUTES } from '@/constants';
import { getNews } from '@/api';

import { NewsItem } from './NewsItem';

const LIMIT = 4;

const NewsSection: React.FC = () => {
  const {
    isLoading,
    isError,
    data: news,
  } = useQuery(['news'], () => getNews({ limit: LIMIT }), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center mb-10 2xl:mb-16">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl">Новости</h2>
        <Link
          to={ROUTES.HOME}
          className="hidden 2xl:flex bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
        >
          <p className="font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      </div>
      {isLoading && (
        <div className="w-fit mx-auto">
          <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
        </div>
      )}
      {isError && (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">Ошибка загрузки новостей</p>
        </div>
      )}
      {news && (
        <div className="flex flex-nowrap gap-5 overflow-x-auto">
          {news.map(newsItem => (
            <div key={newsItem.id} className="flex-1 min-w-96">
              <NewsItem title={newsItem.title} date={newsItem.date} image={newsItem.image} content={newsItem.content} />
            </div>
          ))}
        </div>
      )}
      {news && (
        <Link
          to={ROUTES.HOME}
          className="flex 2xl:hidden bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 md:w-1/3 2xl:w-1/6 h-15 mx-auto mt-8"
        >
          <p className="hidden xs:block font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      )}
    </section>
  );
};

export { NewsSection };
