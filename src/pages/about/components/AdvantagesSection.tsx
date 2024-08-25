import React from 'react';

const AdvantagesSection: React.FC = () => {
  return (
    <section>
      <h1 className="text-5xl px-26 mb-16">Преимущества</h1>
      <div className="bg-primary flex gap-5 px-26 py-14">
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-white text-2xl border-b border-b-white">01</p>
          <div>
            <h4 className="text-white text-2xl">
              Осознанно и целенаправленно помогаем бизнесу развиваться в цифровой среде
            </h4>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-white text-2xl border-b border-b-white">02</p>
          <div>
            <h4 className="text-white text-2xl">
              Создаем интернет-магазины, которые не только служат удобным инструментом для покупателей, но и помогают
              развивать долгие отношения с брендом
            </h4>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-white text-2xl border-b border-b-white">03</p>
          <div>
            <h4 className="text-white text-2xl">
              Осуществляем фасовку химической продукции различных классов опасности.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AdvantagesSection };
