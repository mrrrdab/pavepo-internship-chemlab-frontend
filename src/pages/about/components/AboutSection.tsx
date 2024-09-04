/* eslint-disable max-len */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import chevronUpDarkIcon from '@/assets/icons/chevron-up-dark.svg';
import chevronDownDarkIcon from '@/assets/icons/chevron-down-dark.svg';
import { cn } from '@/utils';
import { Button, Loader } from '@/components';
import { getAbout } from '@/api';

const AboutSection: React.FC = () => {
  const [showText, setShowText] = useState(false);

  const { t, i18n } = useTranslation();

  const {
    data: aboutContent,
    isLoading,
    isError,
  } = useQuery(['about-page', i18n.language], () => getAbout(i18n.language), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !aboutContent) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{aboutContent.title}</h1>
      <div className="hidden xl:grid xl:grid-rows-[205px_200px_300px_1fr] 2xl:grid-rows-[245px_240px_340px_1fr] grid-cols-4 gap-5">
        <img
          src={aboutContent.images[0].url}
          alt={aboutContent.images[0].alt}
          className="row-span-2 rounded w-full h-full object-cover"
        />
        <img
          src={aboutContent.images[1].url}
          alt={aboutContent.images[1].alt}
          className="row-start-3 rounded w-full h-full object-cover"
        />
        <img
          src={aboutContent.images[2].url}
          alt={aboutContent.images[2].alt}
          className="row-start-2 col-start-2 row-span-2 rounded w-full h-full object-cover"
        />
        <div className="row-start-4 col-start-3 col-span-2 grid grid-rows-1 grid-cols-3 gap-5">
          <img
            src={aboutContent.images[3].url}
            alt={aboutContent.images[3].alt}
            className="rounded w-full h-full object-cover"
          />
          <img
            src={aboutContent.images[4].url}
            alt={aboutContent.images[4].alt}
            className="rounded w-full h-full object-cover"
          />
          <img
            src={aboutContent.images[5].url}
            alt={aboutContent.images[5].alt}
            className="rounded w-full h-full object-cover"
          />
        </div>
        <div className="row-start-2 col-start-3 row-span-2 col-span-2 flex flex-col">
          <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[0].content}</p>
        </div>
        <div className="row-start-3 col-start-3 col-span-2 flex flex-col gap-5">
          <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[1].content}</p>
          <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[2].content}</p>
        </div>
        <div className="row-start-4 col-span-2">
          <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[3].content}</p>
        </div>
      </div>

      <div className="xl:hidden flex flex-col gap-8">
        <div className="flex flex-nowrap gap-2.5 overflow-auto h-80">
          {aboutContent.images.map(image => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt}
              className="min-w-80 rounded w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="relative flex flex-col gap-2.5">
          <div className={cn('overflow-hidden', showText ? 'max-h-full' : 'max-h-80')}>
            <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[0].content}</p>
            <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[1].content}</p>
            <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[2].content}</p>
            <p className="opacity-90 text-base 2xl:text-xl">{aboutContent.info[3].content}</p>
          </div>
          <Button
            variant="text"
            onClick={() => setShowText(!showText)}
            className="flex gap-2.5 justify-center items-center w-1/2 mx-auto"
          >
            <p className="font-medium">{showText ? t('about_page.hide_button') : t('about_page.read_more_button')}</p>
            <img src={showText ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
