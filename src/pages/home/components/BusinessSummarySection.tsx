import React from 'react';

const BusinessSummarySection: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16">
        Мы предлагаем
      </h2>
      <div className="bg-primary flex flex-col xl:flex-row gap-8 xl:gap-5 px-8 md:px-14 lg:px-20 2xl:px-26 py-14">
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">01</p>
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xl 2xl:text-2xl">Органические растворители собственного производства:</h4>
            <ul className="list-disc list-inside flex flex-col gap-2.5">
              <li className="text-white/90 text-base 2xl:text-xl">ацетон</li>
              <li className="text-white/90 text-base 2xl:text-xl">ацетонитрил</li>
              <li className="text-white/90 text-base 2xl:text-xl">метанол</li>
              <li className="text-white/90 text-base 2xl:text-xl">комплексные растворители</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">02</p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <h4 className="text-white text-xl 2xl:text-2xl">Перекристаллизация и очистка химических реактивов</h4>
              <p className="text-white/90 text-base 2xl:text-xl">(органические и неорганические вещества)</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-white text-xl 2xl:text-2xl">
                Регенерация отходов, содержащих органические растворители
              </h4>
              <p className="text-white/90 text-base 2xl:text-xl">
                (очистка и возможность восстановления исходного состава растворителя)
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-white text-xl 2xl:text-2xl">Перефасовка химических реактивов в различную тару</h4>
              <p className="text-white/90 text-base 2xl:text-xl">(в т.ч веществ 1 и 2-го класса опасности)</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">03</p>
          <div>
            <h4 className="text-white text-xl 2xl:text-2xl">Растворы химических реактивов необходимой концентрации</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export { BusinessSummarySection };
