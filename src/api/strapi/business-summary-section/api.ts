import { GetBusinessSummarySectionDTO } from './dto';

const getBusinessSummarySection = async (locale: string): Promise<GetBusinessSummarySectionDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/business-summary-section?populate=*&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch business summary section. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const businessSummarySection: GetBusinessSummarySectionDTO = {
    title: data.attributes.title,
    businessSummaryItems: data.attributes.businessSummaryItems.map((item: any) => ({
      id: item.id,
      title: item.title,
      content: item.content,
    })),
  };

  return businessSummarySection;
};

export { getBusinessSummarySection };
