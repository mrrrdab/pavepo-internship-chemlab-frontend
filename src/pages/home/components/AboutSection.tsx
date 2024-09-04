/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import { getAboutSection } from '@/api';
import { Loader } from '@/components';

const AboutSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: aboutSection,
    isLoading,
    isError,
  } = useQuery(['about-section', i18n.language], () => getAboutSection(i18n.language), {
    keepPreviousData: true,
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

  if (isError || !aboutSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{aboutSection.title}</h2>
      <div className="flex flex-col gap-12 2xl:gap-0 2xl:flex-row 2xl:justify-between 2xl:items-stretch">
        <div className="flex-1">
          <div className="flex flex-col gap-10 w-full 2xl:w-3/4">
            <div className="flex flex-col gap-6">
              <p className="opacity-90 text-xl 2xl:text-2xl">{aboutSection.content}</p>
            </div>
            <div className="hidden xs:flex flex-col">
              <div className="flex border-b border-b-black pb-5 mb-5">
                <div className="flex-1 flex flex-col gap-2.5 border-r border-r-black">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">{aboutSection.aboutStats[0].stat}</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">{aboutSection.aboutStats[0].label}</p>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 pl-5">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">{aboutSection.aboutStats[1].stat}</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">{aboutSection.aboutStats[0].label}</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 flex flex-col gap-2.5 border-r border-r-black">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">{aboutSection.aboutStats[2].stat}</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">{aboutSection.aboutStats[2].label}</p>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 pl-5">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">{aboutSection.aboutStats[3].stat}</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">{aboutSection.aboutStats[3].label}</p>
                </div>
              </div>
            </div>
            <Link
              to={aboutSection.button.url}
              className="hidden 2xl:flex bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 h-15"
            >
              <p className="font-medium">{aboutSection.button.label}</p>
              <img src={arrowRightWhiteIcon} alt="Arrow Right" />
            </Link>
          </div>
        </div>
        <div className="h-96 2xl:h-auto 2xl:relative 2xl:flex-1">
          <img
            src={aboutSection.image.url}
            alt={aboutSection.image.alt}
            className="2xl:absolute 2xl:top-0 2xl:left-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
