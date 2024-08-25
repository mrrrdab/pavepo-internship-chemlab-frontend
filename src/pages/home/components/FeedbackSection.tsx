/* eslint-disable max-len */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { Button } from '@/components';

const validationSchema = z.object({
  name: z
    .string()
    .min(1, 'Имя обязательно')
    .regex(/^[А-Яа-яA-Za-z-]+$/, 'Имя может содержать только буквы и дефисы'),
  phoneNumber: z.string().min(1, 'Телефон обязателен').regex(/^\d+$/, 'Телефон может содержать только цифры'),
  email: z.string().email('Некорректный email'),
});

type FormDataType = z.infer<typeof validationSchema>;

// TODO: Form submission result
const FeedbackSection: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
    },
    resolver: zodResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit = (data: FormDataType) => {
    console.log(data);

    reset();
  };

  return (
    <section className="bg-[url('/src/assets/images/feedback-background.png')] bg-cover bg-center w-full px-26 py-12">
      <div className="w-2/5">
        <h2 className="text-white text-5xl mb-12">Оставьте заявку на обратный звонок</h2>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 mb-7">
            <div>
              <input
                type="text"
                placeholder="Имя"
                {...register('name')}
                className="text-white text-xl bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-xl w-full px-6 py-5"
              />
              {errors.name && (
                <div className="bg-error w-fit ml-auto">
                  <p className="text-white text-sm px-1">{errors.name.message}</p>
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Телефон"
                {...register('phoneNumber')}
                className="text-white text-xl bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-xl w-full px-6 py-5"
              />
              {errors.phoneNumber && (
                <div className="bg-error w-fit ml-auto">
                  <p className="text-white text-sm px-1">{errors.phoneNumber.message}</p>
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                {...register('email')}
                className="text-white text-xl bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-xl w-full px-6 py-5"
              />
              {errors.email && (
                <div className="bg-error w-fit ml-auto">
                  <p className="text-white text-sm px-1">{errors.email.message}</p>
                </div>
              )}
            </div>
          </div>
          <p className="text-white/90 text-base mb-8">
            Отправляя свои данные, вы соглашаетесь с условиями персональных данных
          </p>
          <Button
            type="submit"
            variant="outline"
            borderRadius="lg"
            className="group flex justify-between items-center w-2/5 h-15"
          >
            <p>Отправить</p>
            <div className="bg-white border border-black rounded-3xl group-disabled:bg-neutral-300 group-hover:bg-neutral-300 p-2.5">
              <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
            </div>
          </Button>
        </form>
      </div>
    </section>
  );
};

export { FeedbackSection };
