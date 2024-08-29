import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />;
};

export { Loader };
