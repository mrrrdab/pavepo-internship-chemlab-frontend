/* eslint-disable max-len */
import React from 'react';

import { ServiceItem } from './ServiceItem';

const ServicesSection: React.FC = () => {
  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-16">Наши услуги</h2>
      <div className="flex flex-row flex-nowrap overflow-auto 2xl:flex-col gap-6">
        <div className="flex-1 min-w-96">
          <ServiceItem
            title="Производственные  услуги"
            description="Производимые органические растворители, реактивы для бассейнов, растворы химических реактивов необходимой концентрации и др."
          />
        </div>
        <div className="flex-1 min-w-96">
          <ServiceItem
            title="Производственные  услуги"
            description="Производимые органические растворители, реактивы для бассейнов, растворы химических реактивов необходимой концентрации и др."
          />
        </div>
        <div className="flex-1 min-w-96">
          <ServiceItem
            title="Проектирование лабораторий"
            description="Проектирование лабораторий в зависимости от типа лаборатории и стоящих перед ней задач, функциональности, бюджета."
          />
        </div>
        <div className="flex-1 min-w-96">
          <ServiceItem
            title="Сервисное обслуживание"
            description="Сервисное обслуживание лабораторного и аналитического оборудования предусматривает услуги по его настройке, калибровке, квалификации и аттестации."
          />
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
