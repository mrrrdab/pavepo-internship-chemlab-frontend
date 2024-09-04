/* eslint-disable max-len */
import { GetCatalogSectionDTO } from './dto';

const getCatalogSection = async (locale: string): Promise<GetCatalogSectionDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/catalog-section?populate[button]=*&populate[catalogItems][populate]=button&populate[catalogImages][populate]=image&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch catalog section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const catalogSection: GetCatalogSectionDTO = {
    title: data.attributes.title,
    catalogImages: data.attributes.catalogImages.map((item: any) => ({
      id: item.id,
      url: `${import.meta.env.VITE_CMS_DOMAIN}${item.image.data.attributes.url}`,
      alt: item.image.data.attributes.alternativeText || '',
    })),
    button: {
      label: data.attributes.button.label,
      url: data.attributes.button.url,
    },
  };

  return catalogSection;
};

export { getCatalogSection };
