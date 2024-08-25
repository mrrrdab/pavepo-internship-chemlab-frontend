import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Popup } from 'reactjs-popup';

import successfulOrderImage from '@/assets/images/successful-order.png';
import { ROUTES } from '@/constants';
import { Button } from '@/components';

type OrderSuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    onClose();
    navigate(ROUTES.HOME);
  };

  return (
    <Popup open={open} modal overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClose={onClose}>
      <div className="bg-white rounded-xl flex flex-col justify-center items-center gap-6 w-[800px] h-[400px]">
        <h2 className="text-2xl">Ваш заказ успешно оформлен!</h2>
        <img src={successfulOrderImage} alt="Successfull Order Modal Image" className="w-48 h-48 object-cover" />
        <Button variant="text" className="text-black text-xl underline p-0" onClick={handleReturnHome}>
          Вернуться на главную страницу
        </Button>
      </div>
    </Popup>
  );
};

export { OrderSuccessModal };
