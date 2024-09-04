import { GetHeroBlockDTO } from './dto';

const getHeroBlock = async (locale: string): Promise<GetHeroBlockDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/hero-block?locale=${locale}&populate=*`);

  if (!response.ok) {
    throw new Error(`Failed to fetch hero block content. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const heroBlock: GetHeroBlockDTO = {
    title: data.attributes.title,
    image: {
      url: `${import.meta.env.VITE_CMS_DOMAIN}${data.attributes.image.data.attributes.url}`,
      alt: data.attributes.image.data.attributes.alternativeText || '',
    },
    subtitles: data.attributes.subtitles.map((subtitle: any) => ({
      id: subtitle.id,
      title: subtitle.title,
      content: subtitle.content,
    })),
    buttons: data.attributes.buttons.map((button: any) => ({
      id: button.id,
      label: button.label,
      url: button.url,
    })),
  };

  return heroBlock;
};

export { getHeroBlock };
