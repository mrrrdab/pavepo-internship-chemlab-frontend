import { GetServicesSectionDTO } from './dto';

const getServicesSection = async (locale: string): Promise<GetServicesSectionDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/service-section?populate=*&locale=${locale}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch services section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const servicesSection: GetServicesSectionDTO = {
    title: data.attributes.title,
    serviceItems: data.attributes.serviceItems.map((item: any) => ({
      id: item.id,
      title: item.title,
      content: item.content,
    })),
  };

  return servicesSection;
};

export { getServicesSection };
