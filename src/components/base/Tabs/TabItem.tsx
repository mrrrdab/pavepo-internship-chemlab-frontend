import React from 'react';

type TabItemProps = { label: string; children: React.ReactNode };

const TabItem: React.FC<TabItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export type { TabItemProps };
export { TabItem };
