import React from 'react';

import { Button } from '@components/common/Button';
import arrowDownIcon from '@assets/icons/arrow-down.svg';
import languageIcon from '@assets/icons/language.svg';

type TopBarProps = { isHomePage?: boolean };

const TopBar: React.FC<TopBarProps> = ({ isHomePage = false }) => {
  const border = isHomePage ? '' : 'border-b border-b-black';
  const paddingBottom = isHomePage ? '' : 'pb-2.5';

  return (
    <div className="px-26">
      <div className={`flex justify-between items-center py-6 ${border} ${paddingBottom}`}>
        <Button variant="text" className="flex gap-2 p-0">
          <img src={languageIcon} alt="Language" />
          <p>RUS</p>
          <img src={arrowDownIcon} alt="Arrow Down" />
        </Button>
        <div>
          <p className="text-xl">+ 7 (499) 490-51-07</p>
        </div>
      </div>
    </div>
  );
};

export { TopBar };
