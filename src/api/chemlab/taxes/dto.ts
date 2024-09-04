type Tax = {
  id: number;
  type: string;
  value: number;
};

type GetTaxDTO = { data: Tax };
type GetTaxesDTO = { data: Tax[]; metadata: { totalCount: number } };

export type { GetTaxDTO, GetTaxesDTO };
