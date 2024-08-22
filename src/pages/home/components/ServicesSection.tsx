/* eslint-disable max-len */
import { ServiceCard } from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="px-26">
      <h2 className="text-5xl mb-16">Наши услуги</h2>
      <div className="flex flex-col gap-6">
        <ServiceCard
          title="Производственные  услуги"
          description="Производимые органические растворители, реактивы для бассейнов, растворы химических реактивов необходимой концентрации и др."
        />
        <ServiceCard
          title="Проектирование лабораторий"
          description="Проектирование лабораторий в зависимости от типа лаборатории и стоящих перед ней задач, функциональности, бюджета."
        />
        <ServiceCard
          title="Сервисное обслуживание"
          description="Сервисное обслуживание лабораторного и аналитического оборудования предусматривает услуги по его настройке, калибровке, квалификации и аттестации."
        />
      </div>
    </section>
  );
};

export { ServicesSection };
