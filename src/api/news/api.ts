import { GetNewsDTO } from './dto';
import { GetNewsQueryParams } from './types';

const getNews = async (params: GetNewsQueryParams): Promise<GetNewsDTO> => {
  const response = await fetch(`${import.meta.env.VITE_NEWS_API_URL}?_limit=${params.limit}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch news. Status: ${response.status}`);
  }

  return response.json();
};

export { getNews };
