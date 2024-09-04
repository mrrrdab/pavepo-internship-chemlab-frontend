import { GetCatalogCategoryDTO } from './dto';

const getCategories = async (locale: string): Promise<GetCatalogCategoryDTO[]> => {
  const response = await fetch(`${import.meta.env.VITE_CMS_DOMAIN}/api/categories?locale=${locale}&sort=priority:asc`);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories. Status: ${response.status}`);
  }

  const { data } = await response.json();

  const categories: GetCatalogCategoryDTO[] = data.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    url: item.attributes.url,
    priority: item.attributes.priority,
  }));

  return categories;
};

export { getCategories };
