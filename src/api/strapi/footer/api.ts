import { GetFooterDTO } from './dto';

const getFooter = async (locale: string): Promise<GetFooterDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/footer?populate=*&locale=${locale}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch footer content. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const footerData: GetFooterDTO = {
    title: data.attributes.title,
    address: data.attributes.address,
    contacts: data.attributes.contacts.map((contact: any) => ({
      id: contact.id,
      phoneNumber: contact.phoneNumber,
      details: contact.details,
    })),
    whatsappLink: {
      url: data.attributes.whatsappLink.url,
    },
    vkLink: {
      url: data.attributes.vkLink.url,
    },
    yandexZenLink: {
      url: data.attributes.yandexZenLink.url,
    },
    telegramLink: {
      url: data.attributes.telegramLink.url,
    },
  };

  return footerData;
};

export { getFooter };
