import { useContext } from 'react';

import { SearchContext } from '@/providers';

const useSearch = () => useContext(SearchContext);

export { useSearch };
