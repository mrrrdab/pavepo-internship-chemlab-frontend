import { DepartmentButton } from './DepartmentCollapse';

const DepartmentsSection = () => {
  return (
    <section className="px-26">
      <h2 className="text-neutral-900 text-5xl mb-16">Департаменты</h2>
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <DepartmentButton title="Биохимии и Биотехнологии" />
          <DepartmentButton title="Ветеринария" />
          <DepartmentButton title="Материалов для микроэлектроники" />
          <DepartmentButton title="Оборудования для лабораторий" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <DepartmentButton title="Фармацевтики" />
          <DepartmentButton title="Растворителей" />
          <DepartmentButton title="Химических реактивов" />
          <DepartmentButton title="Хромотографии" />
        </div>
      </div>
    </section>
  );
};

export { DepartmentsSection };
