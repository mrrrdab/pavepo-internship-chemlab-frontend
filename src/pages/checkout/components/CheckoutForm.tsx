import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { ROUTES } from '@/constants';
import { cn } from '@/utils';
import { useCart } from '@/hooks';
import { Button, Checkbox, Radio } from '@/components';

import { OrderSummary } from './OrderSummary';
import { OrderSuccessModal } from './OrderSuccessModal';

const validationSchema = z.object({
  fullName: z
    .string()
    .min(1, 'ФИО обязательно')
    .regex(/^[А-Яа-яA-Za-z\s-]+$/, 'ФИО может содержать только буквы, пробелы и дефисы'),
  phoneNumber: z.string().min(1, 'Телефон обязателен').regex(/^\d+$/, 'Телефон может содержать только цифры'),
  email: z.string().email('Некорректный email'),
  deliveryMethod: z.string(),
  comment: z.string().optional(),
  personalData: z.boolean().refine(value => value === true, 'Согласие на обработку данных обязательно'),
});

type FormDataType = z.infer<typeof validationSchema>;

const CheckoutForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
    reset,
  } = useForm<FormDataType>({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      deliveryMethod: 'pickup',
      comment: '',
      personalData: false,
    },
    resolver: zodResolver(validationSchema),
    mode: 'all',
  });

  const [showModal, setShowModal] = useState(false);
  const { deliveryOptions, deleteProducts } = useCart();
  const deliveryMethod = watch('deliveryMethod');

  const onSubmit = (data: FormDataType) => {
    console.log(data);
    setShowModal(true);
    reset();
  };

  const handleModalClose = () => {
    deleteProducts();
    setShowModal(false);
    navigate(ROUTES.HOME);
  };

  if (!deliveryOptions) {
    return (
      <div className="w-full">
        <p className="text-error text-2xl text-center px-4 py-2.5">Ошибка сервера. Вернитесь позже</p>
      </div>
    );
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="grid grid-cols-[1fr_1fr_33%] gap-x-5 gap-y-16">
          <div className="col-span-2 flex flex-col gap-8">
            <h2 className="text-2xl">Личные данные</h2>
            <div className="grid grid-rows-2 grid-cols-2 gap-5">
              <div className="relative flex flex-col gap-1">
                <label
                  htmlFor="fullName"
                  className={cn('text-xl', errors.fullName ? 'text-error' : 'text-neutral-900/65')}
                >
                  ФИО
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="text-xl border border-neutral-900/65 rounded h-12"
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <p className="absolute right-0 top-1 text-error text-base">{errors.fullName.message}</p>
                )}
              </div>
              <div className="relative flex flex-col gap-1">
                <label
                  htmlFor="phoneNumber"
                  className={cn('text-xl', errors.phoneNumber ? 'text-error' : 'text-neutral-900/65')}
                >
                  Телефон
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  className="text-xl border border-neutral-900/65 rounded h-12"
                  {...register('phoneNumber')}
                />
                {errors.phoneNumber && (
                  <p className="absolute right-0 top-1 text-error text-base">{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="relative flex flex-col gap-1">
                <label htmlFor="email" className={cn('text-xl', errors.email ? 'text-error' : 'text-neutral-900/65')}>
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="text-xl border border-neutral-900/65 rounded h-12"
                  {...register('email')}
                />
                {errors.email && <p className="absolute right-0 top-1 text-error text-base">{errors.email.message}</p>}
              </div>
            </div>
          </div>
          <div className="row-start-2 flex flex-col gap-5">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl">Способ доставки</h2>
              <div className="flex flex-col gap-2.5">
                {deliveryOptions.map(option => (
                  <div key={option.id} className="flex items-center gap-5">
                    <Controller
                      name="deliveryMethod"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Radio
                          variant="checkbox"
                          id={option.id}
                          checked={value === option.type}
                          onChange={() => onChange(option.type)}
                        />
                      )}
                    />
                    <label htmlFor={option.id} className="opacity-65 text-xl">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {deliveryMethod === 'pickup' && <p className="text-xl">Москва и Московская область</p>}
            </div>
            <div className="relative flex flex-col gap-1">
              <label htmlFor="comment" className="opacity-65 text-xl">
                Комментарий
              </label>
              <input
                id="comment"
                type="text"
                className="text-xl border border-neutral-900/65 rounded h-12"
                {...register('comment')}
              />
            </div>
          </div>
          <div className="col-start-3 row-span-2 flex flex-col gap-6">
            <div>
              <OrderSummary selectedDeliveryMethod={deliveryMethod} />
              <Button type="submit" variant="outline" className="font-medium rounded w-full h-12">
                Оформить заказ
              </Button>
              <OrderSuccessModal open={showModal} onClose={handleModalClose} />
            </div>
            <div className="flex gap-6">
              <Controller
                name="personalData"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox id="personalData" checked={value} onChange={() => onChange(!value)} />
                )}
              />
              <div>
                <label htmlFor="personalData" className="text-xl opacity-65 underline">
                  Я согласен(на) на обработку персональных данных
                </label>
                {errors.personalData && <p className="text-error text-base">{errors.personalData?.message}</p>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { CheckoutForm };
