import React from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './index.css';

import { cn } from '@/utils';

type InputRangeProps = {
  id?: string;
  min: number;
  max: number;
  value: [number, number];
  step?: number;
  onChange: (value: [number, number]) => void;
  className?: string;
};

const InputRange: React.FC<InputRangeProps> = ({ id = '', min, max, value, step = 1, onChange, className = '' }) => {
  return (
    <RangeSlider
      id={id}
      min={min}
      max={max}
      value={value}
      step={step}
      onInput={e => onChange([e[0], e[1]])}
      className={cn('range-slider', className)}
    />
  );
};

export { InputRange };
