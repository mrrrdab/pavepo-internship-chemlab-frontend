type GetBusinessSummarySectionDTO = {
  title: string;
  businessSummaryItems: GetBusinessSummaryItemDTO[];
};

type GetBusinessSummaryItemDTO = {
  id: number;
  title: string;
  content: string;
};

export type { GetBusinessSummarySectionDTO, GetBusinessSummaryItemDTO };
