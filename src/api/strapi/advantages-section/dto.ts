type GetAdvantagesSectionDTO = {
  title: string;
  advantages: GetAdvantageDTO[];
};

type GetAdvantageDTO = {
  id: number;
  title: string;
  content: string;
};

export type { GetAdvantagesSectionDTO, GetAdvantageDTO };
