/* eslint-disable max-len */
import { TopBar, Header, Footer, Button } from '@components/.';
import {
  CatalogSection,
  FeedbackSection,
  AboutSection,
  ServicesSection,
  SpecialOffersSection,
  SuppliersSection,
  BusinessSummarySection,
} from '@/pages/home/components';
import arrowRightBlackIcon from '@assets/icons/arrow-right-black.svg';

const HomePage = () => {
  return (
    <main>
      <TopBar isHomePage={true} />
      <div className="px-2">
        <div className="bg-[url('/src/assets/images/header-background.png')] bg-cover bg-center rounded-xl w-full">
          <Header isHomePage={true} />
          <div className="flex py-42">
            <div className="flex-1"></div>
            <div className="flex-1 flex flex-col gap-18 px-26">
              <div className="flex flex-col gap-10">
                <h1 className="text-white text-5xl font-semibold">
                  Товары химических реактивов и лабораторного оборудования
                </h1>
                <div className="flex items-center gap-18">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-5xl">01</p>
                    <p className="text-white text-xl">Широкий ассортимент</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-5xl">02</p>
                    <p className="text-white text-xl">Контроль качества</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-5xl">03</p>
                    <p className="text-white text-xl">Уникальные бренды</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <Button borderRadius="lg" className="bg-white flex justify-between items-center w-3/5 h-16">
                  <p className="text-neutral-900">Получить консультацию онлайн</p>
                  <div className="border border-black rounded-3xl p-2.5">
                    <img src={arrowRightBlackIcon} alt="Arrow Right" />
                  </div>
                </Button>
                <Button borderRadius="lg" className="bg-white flex justify-between items-center w-2/5 h-16">
                  <p className="text-neutral-900">Перейти в каталог</p>
                  <div className="border border-black rounded-3xl p-2.5">
                    <img src={arrowRightBlackIcon} alt="Arrow Right" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-50 mt-50">
        <SpecialOffersSection />
        <CatalogSection />
        <BusinessSummarySection />
        <AboutSection />
        <ServicesSection />
        <SuppliersSection />
        <FeedbackSection />
      </div>
      <div className="mt-50">
        <Footer />
      </div>
    </main>
  );
};

export { HomePage };
