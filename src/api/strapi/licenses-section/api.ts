import { GetLicensesSectionDTO } from './dto';

const getLicensesSection = async (locale: string): Promise<GetLicensesSectionDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/licenses-section?populate[licenses][populate]=image&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch licenses section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const licensesSection: GetLicensesSectionDTO = {
    title: data.attributes.title,
    licenses: data.attributes.licenses.map((item: any) => ({
      id: item.id,
      title: item.title,
      image: {
        url: `${import.meta.env.VITE_CMS_DOMAIN}${item.image.data.attributes.url}`,
        alt: item.image.data.attributes.alternativeText || '',
      },
    })),
  };

  return licensesSection;
};

export { getLicensesSection };
