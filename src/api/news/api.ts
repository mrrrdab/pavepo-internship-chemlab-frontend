import { PaginationQueryParams } from '../common';
import { GetNewsDTO } from './dto';

const getAllNews = async (params: PaginationQueryParams): Promise<GetNewsDTO> => {
  const url = new URL(`${import.meta.env.VITE_API_DOMAIN}/api/news`);

  if (params.take !== undefined) {
    url.searchParams.append('take', params.take.toString());
  }

  if (params.skip !== undefined) {
    url.searchParams.append('skip', params.skip.toString());
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch news. Status: ${response.status}`);
  }

  return response.json();
};

export { getAllNews };
