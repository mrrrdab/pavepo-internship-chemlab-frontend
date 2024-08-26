import React from 'react';

import rhtuLogo from '@/assets/images/partner-rhtu.png';
import rudnLogo from '@/assets/images/partner-rudn.png';

const PartnersSection: React.FC = () => {
  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">Наши партнеры</h1>
      <div className="flex flex-nowrap gap-8 overflow-auto h-80">
        <img src={rudnLogo} alt="RUDN" className="min-w-80 w-80 rounded h-full object-contain" />
        <img src={rhtuLogo} alt="RHTU" className="min-w-80 w-80 rounded h-full object-contain" />
      </div>
    </section>
  );
};

export { PartnersSection };
