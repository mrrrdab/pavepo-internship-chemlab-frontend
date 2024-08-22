import aboutImageFirst from '@assets/images/about-1.png';
import aboutImageSecond from '@assets/images/about-2.png';
import aboutImageThird from '@assets/images/about-3.png';
import aboutImageFourth from '@assets/images/about-4.png';
import aboutImageFifth from '@assets/images/about-5.png';
import aboutImageSixth from '@assets/images/about-6.png';

const AboutSection = () => {
  return (
    <section className="px-26">
      <h1 className="text-5xl mb-16">О Нас</h1>
      <div className="grid grid-rows-[245px_215px_275px_145px] grid-cols-4 gap-5">
        <img src={aboutImageFirst} alt="Image" className="row-span-2 rounded w-full h-full object-cover" />
        <img src={aboutImageSecond} alt="Image" className="row-start-3 rounded w-full h-full object-cover" />
        <img
          src={aboutImageThird}
          alt="Image"
          className="row-start-2 col-start-2 row-span-2 rounded w-full h-full object-cover"
        />
        <div className="row-start-4 col-start-3 col-span-2 grid grid-rows-1 grid-cols-3 gap-5">
          <img src={aboutImageFourth} alt="Image" className="rounded w-full h-full object-cover" />
          <img src={aboutImageFifth} alt="Image" className="rounded w-full h-full object-cover" />
          <img src={aboutImageSixth} alt="Image" className="rounded w-full h-full object-cover" />
        </div>
        <div className="row-start-2 col-start-3 row-span-2 col-span-2 flex flex-col">
          <p className="opacity-90 text-xl">
            Компания «ХИММЕД» является поставщиком крупнейших мировых производителей реактивов и оборудования для
            лабораторий: Merck, Sigma-Aldrich, Acros Organics, Scharlau, Thermo Fisher Scientific, Roth, IKA, Honeywell,
            Mettler Toledo,
          </p>
          <p className="opacity-90 text-xl">
            A&D, Bio-Techne (R&D, Tocris, Novus biologicals), Macherey-Nagel, Liebherr, neoFroxx, Corning, Sartorius и
            др. «ХИММЕД» также активно сотрудничает со многими другими российскими и зарубежными партнерами в области
            поставок химических реактивов, фармацевтических субстанций, оборудования, расходных материалов.
          </p>
        </div>
        <div className="row-start-3 col-start-3 col-span-2 flex flex-col gap-5">
          <p className="opacity-90 text-xl">
            Многолетние дилерские и дистрибьюторские отношения с российскими и зарубежными поставщиками и
            производителями дают компании широкие возможности для того, чтобы удовлетворять все требования заказчиков.
            Собственная сеть логистики позволяет компании осуществлять регулярные поставки грузов со строгим соблюдением
            условий транспортировки и хранения химической и биологической продукции, в т. ч. глубокого и длительного
            замораживания от –20⁰ до –80⁰C, а также –140⁰С и –196⁰С.
          </p>
          <p className="opacity-90 text-xl">
            Ключевое преимущество ХИММЕД состоит в том, что мы оснащаем лаборатории полностью, под ключ. Клиенты
            получают возможность заказать все необходимое для лаборатории в одном месте, и этим, безусловно, экономят
            время и собственные средства.
          </p>
        </div>
        <div className="row-start-4 col-span-2">
          <p className="opacity-90 text-xl">
            Но ХИММЕД – это не только надежный и ответственный поставщик, но и конкурентоспособный производитель
            растворителей высокой степени очистки, а также средств радиационной безопасности. С каждым годом компания
            наращивает объемы выпуска востребованной на рынке продукции. ХИММЕД производит метанол, ацетонитрил и
            изооктан высокой степени очистки для градиентной хроматографии.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
