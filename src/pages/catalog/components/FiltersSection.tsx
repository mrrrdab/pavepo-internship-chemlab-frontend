/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useForm, Controller } from 'react-hook-form';

import chevronDownDarkIcon from '@/assets/icons/chevron-down-dark.svg';
import chevronUpDarkIcon from '@/assets/icons/chevron-up-dark.svg';
import tickWhiteIcon from '@/assets/icons/tick-white.svg';
import crossDarkSmallIcon from '@/assets/icons/cross-dark-sm.svg';
import filterDarkIcon from '@/assets/icons/filter-dark.svg';
import {
  AggregatedInfoQueryParams,
  getAggregatedInfo,
  GetAggregatedInfoDTO,
  PaginationQueryParams,
  ProductFiltersQueryParams,
} from '@/api';
import { Button, Radio, ColorCheckbox, InputRange, Loader } from '@/components';
import { cn } from '@/utils';

const formatWeightRanges = (weights: number[]): string[] => {
  if (weights.length === 0) {
    return [];
  }

  if (weights.length === 1) {
    return [`${Math.round(weights[0])} кг`];
  }

  const [minWeight, maxWeight] = [Math.min(...weights), Math.max(...weights)];
  const step = (maxWeight - minWeight) / 6;

  const ranges: string[] = [];

  for (let i = 0; i < 6; i++) {
    const rangeStart = minWeight + i * step;
    const rangeEnd = minWeight + (i + 1) * step;
    ranges.push(`${Math.round(rangeStart)}-${Math.round(rangeEnd)} кг`);
  }

  ranges[ranges.length - 1] = `${Math.round(minWeight + 5 * step)}-${Math.round(maxWeight)} кг`;

  return ranges;
};

type FiltersFormData = {
  category: string;
  priceRange: { min: number; max: number };
  manufacturer: string;
  weightRange: { min: number; max: number };
  colors: string[];
};

type FiltersSectionProps = {
  onApplyFilters: (filters: ProductFiltersQueryParams & PaginationQueryParams) => void;
  isLoading: boolean;
};

const FiltersSection: React.FC<FiltersSectionProps> = ({ onApplyFilters, isLoading }) => {
  const [showFilters, setShowFilters] = useState(true);
  const [showPriceRange, setShowPriceRange] = React.useState(true);
  const [showManufacturers, setShowManufacturers] = useState(true);
  const [showBrandStartLetters, setShowBrandStartLetters] = useState(true);
  const [showWeights, setShowWeights] = useState(true);
  const [showColors, setShowColors] = useState(true);

  const location = useLocation();
  const category = location.pathname.split('/').pop();

  const {
    isLoading: isLoadingData,
    isError,
    data,
  } = useQuery<GetAggregatedInfoDTO>('aggregated-info', () =>
    getAggregatedInfo({ category } as AggregatedInfoQueryParams),
  );

  const weightsRanges = formatWeightRanges(data?.data.weights || []);
  const priceRange = data?.data.priceRange || { min: 0, max: 0 };

  const { control, setValue, handleSubmit, reset } = useForm<FiltersFormData>({
    defaultValues: {
      category,
      priceRange: { min: undefined, max: undefined },
      manufacturer: '',
      weightRange: { min: undefined, max: undefined },
      colors: [] as string[],
    },
  });

  useEffect(() => {
    if (data?.data.priceRange) {
      setValue('priceRange', { min: data.data.priceRange.min, max: data.data.priceRange.max });
    }
    if (data?.data.weights) {
      setValue('weightRange', { min: Math.min(...data.data.weights), max: Math.max(...data.data.weights) });
    }
  }, [data]);

  if (isLoadingData) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">Ошибка загрузки фильтров</p>
      </div>
    );
  }

  return (
    <aside className={cn('overflow-hidden', isLoading ? 'opacity-65 pointer-events-none' : '')}>
      <form name="filters" className="flex flex-col gap-9" onSubmit={handleSubmit(data => onApplyFilters(data))}>
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
                  onClick={() => setShowPriceRange(!showPriceRange)}
                >
                  <p className="text-base 2xl:text-xl">Цена</p>
                  <img src={showPriceRange ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                </Button>
                {showPriceRange && (
                  <div className="flex flex-col gap-5">
                    <Controller
                      control={control}
                      name="priceRange"
                      render={({ field }) => (
                        <div className="relative">
                          <InputRange
                            min={Math.round(priceRange.min)}
                            max={Math.round(priceRange.max)}
                            value={[field.value.min || 0, field.value.max || 0]}
                            step={1}
                            onChange={value => field.onChange({ min: value[0], max: value[1] })}
                            className="w-full"
                          />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-base 2xl:text-xl">{field.value.min || 0} ₽</span>
                            <span className="text-base 2xl:text-xl">{field.value.max || 0} ₽</span>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  borderRadius="lg"
                  className="flex justify-between items-center gap-2 h-18"
                  onClick={() => setShowManufacturers(!showManufacturers)}
                >
                  <p className="text-base 2xl:text-xl">Производители</p>
                  <img src={showManufacturers ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                </Button>
                {showManufacturers && (
                  <div className="flex flex-col gap-5">
                    <Button
                      variant="text"
                      className="flex items-center gap-2 p-0"
                      onClick={() => setShowBrandStartLetters(!showBrandStartLetters)}
                    >
                      <p className="text-base 2xl:text-xl">Выберите производителя</p>
                      <img src={showBrandStartLetters ? chevronUpDarkIcon : chevronDownDarkIcon} alt="Chevron" />
                    </Button>
                    {showBrandStartLetters && (
                      <div className="self-center grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-2.5 lg:h-40 overflow-auto">
                        {data?.data.manufacturers.map(manufacturer => (
                          <div key={manufacturer} className="flex items-center gap-2.5 flex-shrink-0">
                            <Controller
                              control={control}
                              name="manufacturer"
                              render={({ field }) => (
                                <Radio
                                  id={manufacturer}
                                  name="manufacturer"
                                  checked={field.value === manufacturer}
                                  onChange={() => field.onChange(manufacturer)}
                                />
                              )}
                            />
                            <label htmlFor={manufacturer} className="text-base 2xl:text-xl cursor-pointer">
                              {manufacturer}
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
                  <div className="self-center grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-2.5">
                    {weightsRanges.map(weightRange => {
                      const [rangeStart, rangeEnd] = weightRange.split('-').map(w => parseFloat(w));
                      return (
                        <div key={weightRange} className="flex items-center gap-2.5">
                          <Controller
                            control={control}
                            name="weightRange"
                            render={({ field }) => (
                              <Radio
                                id={weightRange}
                                name="weight"
                                checked={field.value.min === rangeStart && field.value.max === rangeEnd}
                                onChange={() => field.onChange({ min: rangeStart, max: rangeEnd })}
                              />
                            )}
                          />
                          <label htmlFor={weightRange} className="text-base 2xl:text-xl cursor-pointer">
                            {weightRange}
                          </label>
                        </div>
                      );
                    })}
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
                  <div className="flex gap-2.5 w-full justify-center overflow-auto p-2">
                    {data?.data.colors.map(color => (
                      <Controller
                        key={color}
                        control={control}
                        name="colors"
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
              <Button
                variant="outline"
                className="flex justify-center items-center gap-4 h-15"
                onClick={() => {
                  reset({
                    category: 'lab-equipment',
                    priceRange: { min: data?.data.priceRange.min || 0, max: data?.data.priceRange.max || 0 },
                    manufacturer: '',
                    weightRange: {
                      min: Math.min(...(data?.data.weights || [0])),
                      max: Math.max(...(data?.data.weights || [0])),
                    },
                    colors: [],
                  });
                  handleSubmit(data => onApplyFilters(data))();
                }}
              >
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
