import { Layout } from '../layout';
import { ProductsSection, FiltersSection } from './components';

const LabEquipmentPage = () => {
  return (
    <Layout>
      <div className="flex gap-5">
        <div className="w-1/4">
          <FiltersSection />
        </div>
        <div className="flex-1">
          <ProductsSection />
        </div>
      </div>
    </Layout>
  );
};

export { LabEquipmentPage };
