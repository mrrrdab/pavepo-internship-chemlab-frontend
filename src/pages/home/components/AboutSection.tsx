import { Button } from '@components/.';
import arrowRightWhiteIcon from '@assets/icons/arrow-right-white.svg';
import aboutImage from '@assets/images/about-home.png';

const AboutSection = () => {
  return (
    <section className="px-26">
      <h2 className="text-neutral-900 text-5xl mb-16">О Нас</h2>
      <div className="flex justify-between">
        <div id="1" className="w-[45%]">
          <div className="flex flex-col gap-10 w-3/4">
            <div className="flex flex-col gap-6">
              <h4 className="text-neutral-900 text-2xl">Компания «ХИММЕД» надежный поставщик на химическом рынке</h4>
              <p className="text-neutral-900/90 text-xl">
                Мы являемся поставщиком крупнейших мировых производителей реактивов и оборудования для лабораторий.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex border-b border-b-black pb-5 mb-5">
                <div className="flex-1 flex flex-col gap-2.5 border-r border-r-black">
                  <h3 className="text-neutral-900/90 text-5xl">+ 12000</h3>
                  <p className="text-neutral-900/90 text-xl">довольных клиентов</p>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 pl-5">
                  <h3 className="text-neutral-900/90 text-5xl">768</h3>
                  <p className="text-neutral-900/90 text-xl">надежных поставщиков</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 flex flex-col gap-2.5 border-r border-r-black">
                  <h3 className="text-neutral-900/90 text-5xl">+2 М</h3>
                  <p className="text-neutral-900/90 text-xl">лучшего товара</p>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 pl-5">
                  <h3 className="text-neutral-900/90 text-5xl">32</h3>
                  <p className="text-neutral-900/90 text-xl">года на рынке</p>
                </div>
              </div>
            </div>
            <Button className="flex justify-center items-center gap-4 w-1/2 h-15">
              <p className="font-medium">Читать еще</p>
              <img src={arrowRightWhiteIcon} alt="Arrow Right" />
            </Button>
          </div>
        </div>
        <div id="2" className="self-stretch flex-1">
          <img src={aboutImage} alt="About Image" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
