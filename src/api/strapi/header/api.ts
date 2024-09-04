import { GetHeaderDTO } from './dto';

const getHeader = async (locale: string): Promise<GetHeaderDTO> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/header?populate=*&locale=${locale}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch header content. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const headerData: GetHeaderDTO = {
    title: data.attributes.title,
    url: data.attributes.url,
    navLinks: data.attributes.navLinks.map((link: any) => ({
      id: link.id,
      label: link.label,
      url: link.url,
    })),
    catalogButton: {
      label: data.attributes.catalogButton.label,
      url: data.attributes.catalogButton.url,
    },
    cartLink: {
      label: data.attributes.cartLink.label,
      url: data.attributes.cartLink.url,
    },
  };

  return headerData;
};

export { getHeader };
