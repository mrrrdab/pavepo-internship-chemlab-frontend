/* eslint-disable max-len */
import { GetSuppliersSectionDTO } from './dto';

const getSuppliersSection = async (locale: string): Promise<GetSuppliersSectionDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/supplier-section?populate[supplierItems][populate]=image&populate=button&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch suppliers section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const suppliersSection: GetSuppliersSectionDTO = {
    title: data.attributes.title,
    description: data.attributes.description,
    supplierItems: data.attributes.supplierItems.map((item: any) => ({
      id: item.id,
      logo: {
        url: `${import.meta.env.VITE_CMS_DOMAIN}${item.image.data.attributes.url}`,
        alt: item.image.data.attributes.alternativeText || '',
      },
    })),
    button: {
      label: data.attributes.button.label,
      url: data.attributes.button.url,
    },
  };

  return suppliersSection;
};

export { getSuppliersSection };
