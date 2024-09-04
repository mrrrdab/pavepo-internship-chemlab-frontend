/* eslint-disable max-len */
import React, { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { send } from '@emailjs/browser';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { Button, Loader } from '@/components';
import { getFeedbackFormImage } from '@/api';

// TODO: Form submission result
const FeedbackSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: feedbackFormImage,
    isLoading,
    isError,
  } = useQuery(['feedback-form-image'], () => getFeedbackFormImage(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const validationSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(1, t('form_common.required_field_error'))
          .regex(/^[А-Яа-яA-Za-z-]+$/, t('feedback_form.name_field_error')),
        phoneNumber: z
          .string()
          .min(1, t('form_common.required_field_error'))
          .regex(/^\d+$/, t('feedback_form.phone_number_field_error')),
        email: z.string().min(1, t('form_common.required_field_error')).email(t('form_common.invalid_field_error')),
      }),
    [i18n.language],
  );

  type FormDataType = z.infer<typeof validationSchema>;

  const {
    register,
    formState: { errors, isSubmitting },
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

  useEffect(() => {
    reset();
  }, [i18n.language]);

  const onSubmit = async (data: FormDataType) => {
    const responseStatus = await send(
      import.meta.env.VITE_EMAILJS_SERVICE_1_ID,
      import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE,
      data,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY_1,
      },
    );

    reset();
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isError || !feedbackFormImage ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
        </div>
      ) : (
        <section
          className="bg-cover bg-center w-full px-8 md:px-14 lg:px-20 2xl:px-26 py-12"
          style={{ backgroundImage: `url(${feedbackFormImage.url})` }}
        >
          <div className="w-full sm:w-3/4 2xl:w-2/5">
            <h2 className="text-white text-3xl md:text-4xl 2xl:text-5xl mb-8 2xl:mb-12">{t('feedback_form.title')}</h2>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5 mb-7">
                <div>
                  <input
                    type="text"
                    placeholder={t('feedback_form.name_field')}
                    {...register('name')}
                    className="text-white text-base 2xl:text-xl bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-base 2xl:placeholder:text-xl w-full px-6 py-5"
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
                    placeholder={t('feedback_form.phone_number_field')}
                    {...register('phoneNumber')}
                    className="text-white text-base 2xl:text-xl bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-base 2xl:placeholder:text-xl w-full px-6 py-5"
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
                    className="text-white text-base 2xl:text-xl bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-base 2xl:placeholder:text-xl w-full px-6 py-5"
                  />
                  {errors.email && (
                    <div className="bg-error w-fit ml-auto">
                      <p className="text-white text-sm px-1">{errors.email.message}</p>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-white/90 text-base mb-8">{t('feedback_form.personal_data_processing_warning')}</p>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="outline"
                borderRadius="lg"
                className="group flex justify-between items-center w-fit xs:w-1/2 2xl:w-2/5 h-15 px-5 py-8 xl:py-2.5"
              >
                <p className="hidden xs:block">{t('feedback_form.submit_button')}</p>
                <div className="bg-white border border-black rounded-3xl group-disabled:bg-neutral-300 group-hover:bg-neutral-300 p-2.5">
                  <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                </div>
              </Button>
            </form>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export { FeedbackSection };
