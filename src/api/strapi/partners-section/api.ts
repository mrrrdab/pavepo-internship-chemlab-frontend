import { GetPartnersSectionDTO } from './dto';

const getPartnersSection = async (locale: string): Promise<GetPartnersSectionDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/partners-section?populate[partners][populate]=image&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch partners section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const partnersSection: GetPartnersSectionDTO = {
    title: data.attributes.title,
    partners: data.attributes.partners.map((partner: any) => ({
      id: partner.id,
      image: {
        url: `${import.meta.env.VITE_CMS_DOMAIN}${partner.image.data.attributes.url}`,
        alt: partner.image.data.attributes.alternativeText || '',
      },
    })),
  };

  return partnersSection;
};

export { getPartnersSection };
