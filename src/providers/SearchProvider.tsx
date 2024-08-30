import React, { createContext, useState } from 'react';

type SearchProviderProps = {
  children: React.ReactNode;
};

type SearchContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchProvider };
