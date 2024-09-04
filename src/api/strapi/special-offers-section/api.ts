/* eslint-disable max-len */
import { GetSpecialOffersSectionDTO } from './dto';

const getSpecialOffersSection = async (locale: string): Promise<GetSpecialOffersSectionDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/special-offers-section?populate=*&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch special offers section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const suppliersSection: GetSpecialOffersSectionDTO = {
    title: data.attributes.title,
    offerLinkTitle: data.attributes.offerLinkTitle,
    button: {
      label: data.attributes.button.label,
      url: data.attributes.button.url,
    },
  };

  return suppliersSection;
};

export { getSpecialOffersSection };
