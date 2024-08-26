import React from 'react';

const AdvantagesSection: React.FC = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16">
        Преимущества
      </h1>
      <div className="bg-primary flex flex-col xl:flex-row gap-5 xl:gap-8 px-8 md:px-14 lg:px-20 2xl:px-26 py-14">
        <div className="flex-1 flex flex-col gap-4 xl:gap-6">
          <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">01</p>
          <div>
            <h4 className="text-white text-xl 2xl:text-2xl">
              Осознанно и целенаправленно помогаем бизнесу развиваться в цифровой среде
            </h4>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 xl:gap-6">
          <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">02</p>
          <div>
            <h4 className="text-white text-xl 2xl:text-2xl">
              Создаем интернет-магазины, которые не только служат удобным инструментом для покупателей, но и помогают
              развивать долгие отношения с брендом
            </h4>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 xl:gap-6">
          <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">03</p>
          <div>
            <h4 className="text-white text-xl 2xl:text-2xl">
              Осуществляем фасовку химической продукции различных классов опасности.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AdvantagesSection };
