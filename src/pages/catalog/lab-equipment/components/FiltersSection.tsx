import { useState } from 'react';

import arrowDownIcon from '@assets/icons/arrow-down.svg';
import arrowUpIcon from '@assets/icons/arrow-up.svg';
import tickIcon from '@assets/icons/tick-white.svg';
import crossIcon from '@assets/icons/cross-black.svg';
import filterIcon from '@assets/icons/filter.svg';
import { Button, Checkbox, ColorCheckbox } from '@/components';

// TODO
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'.split('');
const WEIGHTS = ['1-5 кг', '5-10 кг', '10-25 кг', '25-50 кг'];
const COLORS = ['primary', '#000000', '#2196F3', '#A50000', '#D8C200', '#0C8E21', '#505050', '#432B2B'];

const FiltersSection = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [showBrands, setShowBrands] = useState(true);
  const [showBrandStartLetters, setShowBrandStartLetters] = useState(true);
  const [showWeights, setShowWeights] = useState(true);
  const [showColors, setShowColors] = useState(true);

  return (
    <aside>
      <form name="filters" className="flex flex-col gap-9">
        <Button
          variant="outline"
          size="lg"
          borderRadius="lg"
          className="flex justify-between items-center gap-2 h-18"
          onClick={() => setShowFilters(() => !showFilters)}
        >
          <div className="flex gap-2">
            <img src={filterIcon} alt="Arrow Down" />
            <p>Фильтр</p>
          </div>
          <img src={showFilters ? arrowUpIcon : arrowDownIcon} alt="Arrow Icon" />
        </Button>
        {showFilters && (
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  borderRadius="lg"
                  className="flex justify-between items-center gap-2 h-18"
                  onClick={() => setShowBrands(() => !showBrands)}
                >
                  <p>Бренды</p>
                  <img src={showBrands ? arrowUpIcon : arrowDownIcon} alt="Arrow Icon" />
                </Button>
                {showBrands && (
                  <div className="flex flex-col gap-5">
                    <Button
                      variant="text"
                      className="flex gap-2 p-0"
                      onClick={() => setShowBrandStartLetters(() => !showBrandStartLetters)}
                    >
                      <p>Выберите букву</p>
                      <img src={showBrandStartLetters ? arrowUpIcon : arrowDownIcon} alt="Arrow Icon" />
                    </Button>
                    {showBrandStartLetters && (
                      <div className="self-center grid grid-flow-col grid-rows-5 grid-cols-5 gap-x-8 gap-y-2.5">
                        {ALPHABET.map(letter => (
                          <div key={letter} className="flex items-center gap-2.5">
                            <Checkbox id={letter} name={letter} variant="circle" />
                            <label htmlFor={letter} className="text-xl cursor-pointer">
                              {letter}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  borderRadius="lg"
                  className="flex justify-between items-center gap-2 h-18"
                  onClick={() => setShowWeights(() => !showWeights)}
                >
                  <p>Вес</p>
                  <img src={showWeights ? arrowUpIcon : arrowDownIcon} alt="Arrow Icon" />
                </Button>
                {showWeights && (
                  <div className="self-center grid grid-flow-col grid-rows-2 grid-cols-2 gap-x-8 gap-y-2.5">
                    {WEIGHTS.map(weight => (
                      <div key={weight} className="flex items-center gap-2.5">
                        <Checkbox id={weight} name={weight} variant="circle" />
                        <label htmlFor={weight} className="text-xl cursor-pointer">
                          {weight}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  borderRadius="lg"
                  className="flex justify-between items-center gap-2 h-18"
                  onClick={() => setShowColors(() => !showColors)}
                >
                  <p>Цвет</p>
                  <img src={showColors ? arrowUpIcon : arrowDownIcon} alt="Arrow Icon" />
                </Button>
                {showColors && (
                  <div className="self-center flex gap-2.5">
                    {COLORS.map(color => (
                      <ColorCheckbox key={color} name={color} color={color} size="lg" />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Button type="submit" className="font-semibold flex justify-center items-center gap-4 h-15">
                <p>Применить</p>
                <img src={tickIcon} alt="Tick" />
              </Button>
              <Button variant="outline" className="flex justify-center items-center gap-4 h-15">
                <p>Сбросить все</p>
                <img src={crossIcon} alt="Cross" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </aside>
  );
};

export { FiltersSection };
