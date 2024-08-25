/* eslint-disable max-len */
import React from 'react';

import { ServiceItem } from './ServiceItem';

const ServicesSection: React.FC = () => {
  return (
    <section className="px-26">
      <h2 className="text-5xl mb-16">Наши услуги</h2>
      <div className="flex flex-col gap-6">
        <ServiceItem
          title="Производственные  услуги"
          description="Производимые органические растворители, реактивы для бассейнов, растворы химических реактивов необходимой концентрации и др."
        />
        <ServiceItem
          title="Проектирование лабораторий"
          description="Проектирование лабораторий в зависимости от типа лаборатории и стоящих перед ней задач, функциональности, бюджета."
        />
        <ServiceItem
          title="Сервисное обслуживание"
          description="Сервисное обслуживание лабораторного и аналитического оборудования предусматривает услуги по его настройке, калибровке, квалификации и аттестации."
        />
      </div>
    </section>
  );
};

export { ServicesSection };
