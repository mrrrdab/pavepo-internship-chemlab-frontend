/* eslint-disable max-len */
import { GetDeliveryOptionDTO, GetDeliveryPageDTO } from './dto';

const getDeliveryPage = async (locale: string): Promise<GetDeliveryPageDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/delivery-page?populate[deliveryOptions]=*&populate[deliveryDetails]=*&populate[directions][populate]=preview&populate[deliveryImage]=*&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch delivery page. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const deliveryPage: GetDeliveryPageDTO = {
    title: data.attributes.title,
    deliverySectionTitle: data.attributes.deliverySectionTitle,
    deliveryOptions: data.attributes.deliveryOptions.map((item: any) => ({
      id: item.id,
      type: item.type,
      label: item.label,
      description: item.description,
      price: item.price,
    })),
    deliveryDetails: data.attributes.deliveryDetails.map((item: any) => ({
      id: item.id,
      info: item.content,
    })),
    directionsTitle: data.attributes.directionsTitle,
    directions: {
      title: data.attributes.directions.title,
      url: `${import.meta.env.VITE_CMS_DOMAIN}${data.attributes.directions.url}`,
      linkLabel: data.attributes.directions.linkLabel,
      preview: `${import.meta.env.VITE_CMS_DOMAIN}${data.attributes.directions.preview.data.attributes.url}`,
      previewAlt: data.attributes.directions.preview.data.attributes.alternativeText,
    },
    image: {
      url: `${import.meta.env.VITE_CMS_DOMAIN}${data.attributes.deliveryImage.data.attributes.url}`,
      alt: data.attributes.deliveryImage.data.attributes.alternativeText || '',
    },
  };

  return deliveryPage;
};

const getDeliveryOptions = async (locale: string): Promise<GetDeliveryOptionDTO[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_CMS_DOMAIN}/api/delivery-page?populate[deliveryOptions]=*&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch delivery options. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const deliveryOptions: GetDeliveryOptionDTO[] = data.attributes.deliveryOptions.map((item: any) => ({
    id: item.id,
    type: item.type,
    label: item.label,
    description: item.description,
    price: item.price,
  }));

  return deliveryOptions;
};

export { getDeliveryPage, getDeliveryOptions };
