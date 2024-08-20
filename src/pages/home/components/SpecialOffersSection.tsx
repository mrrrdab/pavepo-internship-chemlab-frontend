import { Button } from '@components/.';
import arrowRightWhiteIcon from '@assets/icons/arrow-right-white.svg';
import knifeMill from '@assets/images/special-offer-knife-mill.png';
import spectrophotometer from '@assets/images/special-offer-spectrophotometer.png';
import universalDispenser from '@assets/images/special-offer-universal-dispenser.png';

import { SpecialOfferCard } from './SpecialOfferCard';

const SpecialOffersSection = () => {
  return (
    <section className="px-26">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-neutral-900 text-5xl">Специальные предложения</h2>
        <Button className="flex justify-center items-center gap-4 w-1/6 h-15">
          <p className="font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Button>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <SpecialOfferCard imgSrc={knifeMill} title="Ножевая мельница" description="GRINDOMIX GM 200" />
        </div>
        <div className="flex-1">
          <SpecialOfferCard imgSrc={spectrophotometer} title="Спектрофотометр" description="Ultra-3660 UV-VIS" />
        </div>
        <div className="flex-1">
          <SpecialOfferCard imgSrc={universalDispenser} title="Универсальные дозаторы IKA" />
        </div>
      </div>
    </section>
  );
};

export { SpecialOffersSection };
