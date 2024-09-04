import { GetAboutSectionDTO } from './dto';

const getAboutSection = async (locale: string): Promise<GetAboutSectionDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/about-section?populate=*&locale=${locale}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch about section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const aboutSection: GetAboutSectionDTO = {
    title: data.attributes.title,
    image: {
      url: `${import.meta.env.VITE_CMS_DOMAIN}${data.attributes.image.data.attributes.url}`,
      alt: data.attributes.image.data.attributes.alternativeText || '',
    },
    content: data.attributes.content,
    aboutStats: data.attributes.aboutStatsItems.map((item: any) => ({
      id: item.id,
      stat: item.title,
      label: item.content,
    })),
    button: {
      label: data.attributes.button.label,
      url: data.attributes.button.url,
    },
  };

  return aboutSection;
};

export { getAboutSection };
