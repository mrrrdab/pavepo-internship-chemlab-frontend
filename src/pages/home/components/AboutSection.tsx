/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import aboutImage from '@/assets/images/home-about.png';
import { ROUTES } from '@/constants';

const AboutSection: React.FC = () => {
  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-16">О Нас</h2>
      <div className="flex flex-col 2xl:flex-row 2xl:justify-between">
        <div className="flex-1">
          <div className="flex flex-col gap-10 w-full 2xl:w-3/4">
            <div className="flex flex-col gap-6">
              <h4 className="text-xl 2xl:text-2xl">Компания «ХИММЕД» надежный поставщик на химическом рынке</h4>
              <p className="opacity-90 text-xl 2xl:text-2xls">
                Мы являемся поставщиком крупнейших мировых производителей реактивов и оборудования для лабораторий.
              </p>
            </div>
            <div className="hidden xs:flex flex-col">
              <div className="flex border-b border-b-black pb-5 mb-5">
                <div className="flex-1 flex flex-col gap-2.5 border-r border-r-black">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">+ 12000</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">довольных клиентов</p>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 pl-5">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">768</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">надежных поставщиков</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 flex flex-col gap-2.5 border-r border-r-black">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">+2 М</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">лучшего товара</p>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 pl-5">
                  <h3 className="opacity-90 text-3xl md:text-4xl 2xl:text-5xl">32</h3>
                  <p className="opacity-90 text-base 2xl:text-xl">года на рынке</p>
                </div>
              </div>
            </div>
            <Link
              to={ROUTES.ABOUT}
              className="hidden 2xl:flex bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 h-15"
            >
              <p className="font-medium">Читать еще</p>
              <img src={arrowRightWhiteIcon} alt="Arrow Right" />
            </Link>
          </div>
        </div>
        <div className="rounded-lg h-96 2xl:flex-1 2xl:h-auto 2xl:self-stretch mt-8 2xl:m-0">
          <img src={aboutImage} alt="About Image" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
