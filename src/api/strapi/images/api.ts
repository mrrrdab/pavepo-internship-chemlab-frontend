import { GetImageDTO } from '../common';

const getCatalogImage = async (): Promise<GetImageDTO> => {
  return getImage('/api/catalog-image');
};

const getContactsImage = async (): Promise<GetImageDTO> => {
  return getImage('/api/contacts-image');
};

const getFeedbackFormImage = async (): Promise<GetImageDTO> => {
  return getImage('/api/feedback-form-image');
};

const getImage = async (endpoint: string): Promise<GetImageDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}${endpoint}?populate=*`);

  if (!response.ok) {
    throw new Error(`Failed to fetch image from ${endpoint}. Status: ${response.status}`);
  }

  const { data } = await response.json();

  return {
    url: `${import.meta.env.VITE_CMS_DOMAIN}${data.attributes.image.data.attributes.url}`,
    alt: data.attributes.image.data.attributes.alternativeText || '',
  };
};

export { getCatalogImage, getContactsImage, getFeedbackFormImage };
