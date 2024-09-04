/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Popup } from 'reactjs-popup';
import { useTranslation } from 'react-i18next';

import successfulOrderImage from '@/assets/images/successful-order.png';
import { ROUTES } from '@/constants';
import { Button } from '@/components';

type OrderSuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturnHome = () => {
    onClose();
    navigate(ROUTES.HOME);
  };

  return (
    <Popup open={open} modal overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClose={onClose}>
      <div className="bg-white rounded-xl flex flex-col justify-center items-center gap-6 xs:w-[360px] sm:w-[400px] lg:w-[600px] 2xl:w-[800px] p-10 mx-auto">
        <h2 className="text-xl 2xl:text-2xl">{t('order_success_modal.success_message')}</h2>
        <img src={successfulOrderImage} alt="Successfull Order Modal Image" className="w-48 h-48 object-cover" />
        <Button variant="text" className="text-black text-base 2xl:text-xl underline p-0" onClick={handleReturnHome}>
          {t('order_success_modal.return_to_home_button')}
        </Button>
      </div>
    </Popup>
  );
};

export { OrderSuccessModal };
