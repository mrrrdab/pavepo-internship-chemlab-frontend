/* eslint-disable max-len */
import { GetAboutDTO } from './dto';

const getAbout = async (locale: string): Promise<GetAboutDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/about-page?populate[images][populate]=image&populate[info][populate]=image&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch about content. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const aboutContent: GetAboutDTO = {
    title: data.attributes.title,
    images: data.attributes.images.map((item: any) => ({
      id: item.id,
      url: `${import.meta.env.VITE_CMS_DOMAIN}${item.image.data.attributes.url}`,
      alt: item.image.data.attributes.alternativeText || '',
    })),
    info: data.attributes.info.map((info: any) => ({
      id: info.id,
      content: info.content,
    })),
  };

  return aboutContent;
};

export { getAbout };
