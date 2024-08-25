import React from 'react';

import rhtuLogo from '@/assets/images/partner-rhtu.png';
import rudnLogo from '@/assets/images/partner-rudn.png';

const PartnersSection: React.FC = () => {
  return (
    <section className="px-26">
      <h1 className="text-5xl mb-16">Наши партнеры</h1>
      <div className="flex items-center gap-16">
        <img src={rudnLogo} alt="RUDN" className="object-cover" />
        <img src={rhtuLogo} alt="RHTU" className="object-cover" />
      </div>
    </section>
  );
};

export { PartnersSection };
