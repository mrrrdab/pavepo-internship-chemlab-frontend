import React, { ReactElement, useState } from 'react';

import { cn } from '@/utils';

import { Button } from '../Button';
import { TabItem, TabItemProps } from './TabItem';

type TabListVariant = 'primary' | 'secondary';

type TabListProps = {
  variant?: TabListVariant;
  activeTabIndex?: number;
  children: React.ReactNode;
};

const baseClasses = 'text-2xl uppercase border-b w-full';

const variantClasses: Record<TabListVariant, string> = {
  primary: 'bg-primary text-white border-b-white',
  secondary: 'bg-secondary text-neutral-900 border-b-neutral-900',
};

const activeTabClasses: Record<TabListVariant, string> = {
  primary: 'border-b-neutral-900',
  secondary: 'border-b-primary',
};

const TabList: React.FC<TabListProps> = ({ variant = 'primary', activeTabIndex = 0, children }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const varianStyles = variantClasses[variant];
  const activeTabStyles = activeTabClasses[variant];

  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> => React.isValidElement(child) && child.type === TabItem,
  );

  const handleActivateTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <nav>
        <ul className="flex">
          {tabs.map((tab, index) => (
            <li key={index} className="grow">
              <Button
                size="xl"
                borderRadius="none"
                className={cn(baseClasses, varianStyles, index === activeTab ? activeTabStyles : '')}
                onClick={() => handleActivateTab(index)}
              >
                {tab.props.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div>{tabs[activeTab]}</div>
    </div>
  );
};

export { TabList };
