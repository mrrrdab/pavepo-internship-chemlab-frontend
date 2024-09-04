import { GetFileDTO, GetImageDTO } from '../common';

type GetDeliveryPageDTO = {
  title: string;
  deliverySectionTitle: string;
  deliveryOptions: GetDeliveryOptionDTO[];
  deliveryDetails: GetDeliveryDetailDTO[];
  directionsTitle: string;
  directions: GetFileDTO;
  image: GetImageDTO;
};

type GetDeliveryOptionDTO = {
  id: number;
  type: string;
  label: string;
  description: string;
  price: number;
};

type GetDeliveryDetailDTO = {
  id: number;
  info: string;
};

export type { GetDeliveryPageDTO, GetDeliveryOptionDTO, GetDeliveryDetailDTO };
