import arrowDownIcon from '@assets/icons/arrow-down.svg';
import directionsImage from '@assets/images/directions.png';

const DirectionsSection = () => {
  return (
    <section>
      <h2 className="text-2xl mb-8">Схема проезда:</h2>
      <div className="flex gap-9">
        <img src={directionsImage} alt="Map" />
        <div className="flex flex-col justify-between">
          <p className="opcaity-90 text-xl">Файл pdf</p>
          <a href="" className="border-b border-b-black flex gap-2">
            <p className="opcaity-90 text-xl">Скачать</p>
            <img src={arrowDownIcon} alt="Arrow Down" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { DirectionsSection };
