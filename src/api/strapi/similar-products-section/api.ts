/* eslint-disable max-len */
import { GetSimilarProductsSectionDTO } from './dto';

const getSimilarProductsSection = async (locale: string): Promise<GetSimilarProductsSectionDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/similar-products-section?populate=*&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch similar products section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const similarProductsSection: GetSimilarProductsSectionDTO = {
    title: data.attributes.title,
  };

  return similarProductsSection;
};

export { getSimilarProductsSection };
