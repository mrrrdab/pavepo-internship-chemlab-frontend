type GetButtonDTO = {
  label?: string;
  url: string;
};

type GetImageDTO = {
  id?: string;
  url: string;
  alt: string;
  priority?: number;
};

type GetLinkDTO = {
  id?: string;
  label?: string;
  url: string;
};

type GetContactDTO = {
  id?: number;
  phoneNumber: string;
  details?: string;
};

type GetFileDTO = {
  id?: number;
  title: string;
  url: string;
  linkLabel?: string;
  preview: string;
  previewAlt: string;
};

export type { GetButtonDTO, GetImageDTO, GetLinkDTO, GetContactDTO, GetFileDTO };
