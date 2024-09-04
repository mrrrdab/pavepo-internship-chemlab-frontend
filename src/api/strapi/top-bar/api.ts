import { GetTopBarDTO } from './dto';

const getTopBar = async (): Promise<GetTopBarDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/top-bar?populate=*`);

  if (!response.ok) {
    throw new Error(`Failed to fetch top bar content. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const tobBarData: GetTopBarDTO = {
    contact: {
      phoneNumber: data.attributes.contact.phoneNumber,
    },
  };

  return tobBarData;
};

export { getTopBar };
