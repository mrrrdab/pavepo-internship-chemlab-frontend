type GetServicesSectionDTO = {
  title: string;
  serviceItems: GetServiceItemDTO[];
};

type GetServiceItemDTO = {
  id: number;
  title: string;
  content: string;
};

export type { GetServicesSectionDTO, GetServiceItemDTO };
