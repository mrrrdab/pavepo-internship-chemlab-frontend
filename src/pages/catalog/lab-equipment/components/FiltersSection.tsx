import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import chevronDownDarkIcon from '@/assets/icons/chevron-down-dark.svg';
import chevronUpDarkIcon from '@/assets/icons/chevron-up-dark.svg';
import tickWhiteIcon from '@/assets/icons/tick-white.svg';
import crossDarkSmallIcon from '@/assets/icons/cross-dark-sm.svg';
import filterDarkIcon from '@/assets/icons/filter-dark.svg';
import { Button, Radio, ColorCheckbox } from '@/components';

// TODO
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'.split('');
const WEIGHTS = ['1-5 кг', '5-10 кг', '10-25 кг', '25-50 кг'];
const COLORS = ['primary', '#000000', '#2196F3', '#A50000', '#D8C200', '#0C8E21', '#505050', '#432B2B'];

const FiltersSection: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [showBrands, setShowBrands] = useState(true);
  const [showBrandStartLetters, setShowBrandStartLetters] = useState(true);
  const [showWeights, setShowWeights] = useState(true);
  const [showColors, setShowColors] = useState(true);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      brandLetter: '',
      weight: '',
      color: [] as string[],
    },
  });

  return (
    <aside className="overflow-hidden">
      <form name="filters" className="flex flex-col gap-9" onSubmit={handleSubmit(data => console.log(data))}>
        <Button
          variant="outline"
          size="lg"
          borderRadius="lg"
          className="flex justify-between items-center gap-2 h-18"
          onClick={() => setShowFilters(!showFilters)}
        >
          <div className="flex gap-2 items-center">
            <img src={filterDarkIcon} alt="Filter" />
            <p className="text-base 2xl:text-xl">Фильтр</p>
          </div>
          <img src={showFilters ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
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
                  onClick={() => setShowBrands(!showBrands)}
                >
                  <p className="text-base 2xl:text-xl">Бренды</p>
                  <img src={showBrands ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                </Button>
                {showBrands && (
                  <div className="flex flex-col gap-5">
                    <Button
                      variant="text"
                      className="flex items-center gap-2 p-0"
                      onClick={() => setShowBrandStartLetters(!showBrandStartLetters)}
                    >
                      <p className="text-base 2xl:text-xl">Выберите букву</p>
                      <img src={showBrandStartLetters ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                    </Button>
                    {showBrandStartLetters && (
                      <div className="self-center grid grid-flow-col grid-rows-5 grid-cols-5 gap-x-8 gap-y-2.5">
                        {ALPHABET.map(letter => (
                          <div key={letter} className="flex items-center gap-2.5">
                            <Controller
                              control={control}
                              name="brandLetter"
                              render={({ field }) => (
                                <Radio
                                  id={letter}
                                  name="brandLetter"
                                  checked={field.value === letter}
                                  onChange={() => field.onChange(letter)}
                                />
                              )}
                            />
                            <label htmlFor={letter} className="text-base 2xl:text-xl cursor-pointer">
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
                  onClick={() => setShowWeights(!showWeights)}
                >
                  <p className="text-base 2xl:text-xl">Вес</p>
                  <img src={showWeights ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                </Button>
                {showWeights && (
                  <div className="self-center grid grid-flow-col grid-rows-2 grid-cols-2 gap-x-8 gap-y-2.5">
                    {WEIGHTS.map(weight => (
                      <div key={weight} className="flex items-center gap-2.5">
                        <Controller
                          control={control}
                          name="weight"
                          render={({ field }) => (
                            <Radio
                              id={weight}
                              name="weight"
                              checked={field.value === weight}
                              onChange={() => field.onChange(weight)}
                            />
                          )}
                        />
                        <label htmlFor={weight} className="text-base 2xl:text-xl cursor-pointer">
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
                  onClick={() => setShowColors(!showColors)}
                >
                  <p className="text-base 2xl:text-xl">Цвет</p>
                  <img src={showColors ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                </Button>
                {showColors && (
                  <div className="self-center flex gap-2.5">
                    {COLORS.map(color => (
                      <Controller
                        key={color}
                        control={control}
                        name="color"
                        render={({ field }) => (
                          <ColorCheckbox
                            name={color}
                            color={color}
                            size="lg"
                            checked={field.value.includes(color)}
                            onChange={() => {
                              const newValue = field.value.includes(color)
                                ? field.value.filter((c: string) => c !== color)
                                : [...field.value, color];
                              field.onChange(newValue);
                            }}
                          />
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Button type="submit" className="font-semibold flex justify-center items-center gap-4 h-15">
                <p>Применить</p>
                <img src={tickWhiteIcon} alt="Tick" />
              </Button>
              <Button variant="outline" className="flex justify-center items-center gap-4 h-15" onClick={() => reset()}>
                <p>Сбросить все</p>
                <img src={crossDarkSmallIcon} alt="Cross" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </aside>
  );
};

export { FiltersSection };
