import { GetAdvantagesSectionDTO } from './dto';

const getAdvantagesSection = async (locale: string): Promise<GetAdvantagesSectionDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/advantages-section?populate=*&locale=${locale}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch advantages section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const advantagesSection: GetAdvantagesSectionDTO = {
    title: data.attributes.title,
    advantages: data.attributes.advantages.map((item: any) => ({
      id: item.id,
      title: item.title,
      content: item.content,
    })),
  };

  return advantagesSection;
};

export { getAdvantagesSection };
