import { useForm } from 'react-hook-form';

import { Checkbox } from '@/components';

const CheckoutForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl">Личные данные</h2>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="opacity-65 text-xl">
              ФИО
            </label>
            <input
              id="fullName"
              type="text"
              className="border border-neutral-900/65 rounded h-12"
              {...register('fullName')}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="opacity-65 text-xl">
              Телефон
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="border border-neutral-900/65 rounded h-12"
              {...register('phoneNumber')}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="opacity-65 text-xl">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="border border-neutral-900/65 rounded h-12"
              {...register('email')}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl">Способ доставки</h2>
          <div className="flex jusfify-between items-center">
            <div className="flex flex-col gap-8">
              {/* TODO */}
              <div className="flex items-center gap-5 w-full">
                <Checkbox id="pickup" {...register('pickup')} className="w-6 h-6 p-0" />
                <label htmlFor="pickup" className="opacity-65 text-xl">
                  Самовывоз
                </label>
                <div className="flex items-center gap-5">
                  <Checkbox id="delivery" {...register('pickup')} className="w-6 h-6 p-0" />
                  <label htmlFor="delivery" className="opacity-65 text-xl">
                    Доставка
                  </label>
                </div>
              </div>
              <p className="text-xl">Москва и Московская область</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-8">
        <label htmlFor="fullName" className="opacity-65 text-xl">
          Комментарий
        </label>
        <input
          id="comment"
          type="text"
          className="border border-neutral-900/65 rounded h-12"
          {...register('comment')}
        />
      </div>
    </form>
  );
};

export { CheckoutForm };
