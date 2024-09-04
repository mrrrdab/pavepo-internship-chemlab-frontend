/* eslint-disable max-len */
import React, { useRef, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { Popup } from 'reactjs-popup';
import { send } from '@emailjs/browser';

import chatDarkSmallIcon from '@/assets/icons/chat-dark-sm.svg';
import arrowUpDarkSmallIcon from '@/assets/icons/arrow-up-dark-sm.svg';
import crossDarkMediumIcon from '@/assets/icons/cross-dark-md.svg';
import crossDarkSmallIcon from '@/assets/icons/cross-dark-sm.svg';

import { Button } from '../base';

type ChatPopupProps = { trigger: JSX.Element };

const ChatPopup: React.FC<ChatPopupProps> = ({ trigger }) => {
  const { t, i18n } = useTranslation();

  const popupRef = useRef(null);
  const [userMessage, setUserMessage] = useState<string | null>(null);

  const validationSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(1, t('form_common.required_field_error'))
          .regex(/^[А-Яа-яA-Za-z\s-]+$/, t('form_common.invalid_field_error')),
        email: z.string().min(1, t('form_common.required_field_error')).email(t('form_common.invalid_field_error')),
        message: z.string().min(1, t('form_common.required_field_error')),
      }),
    [i18n.language],
  );

  type FormDataType = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormDataType>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit = async (data: FormDataType) => {
    setUserMessage(data.message);

    await send(
      import.meta.env.VITE_EMAILJS_SERVICE_2_ID,
      import.meta.env.VITE_EMAILJS_CUSTOMER_MESSAGE_TEMPLATE,
      data,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY_2,
      },
    );
    reset();
  };

  const handleClose = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };

  return (
    <Popup ref={popupRef} trigger={trigger} arrow={false}>
      <div className="fixed bottom-0 right-0 border border-primary md:rounded-t-3xl w-full h-full flex flex-col md:block md:h-auto md:w-100">
        <div className="bg-primary md:rounded-t-3xl flex justify-center items-center gap-5 py-6 h-16 md:h-auto">
          <Button variant="text" className="absolute top-0 -left-1 md:-left-20" onClick={handleClose}>
            <img src={crossDarkMediumIcon} alt="Cross" className="hidden md:block" />
            <img src={crossDarkSmallIcon} alt="Cross" className="md:hidden" />
          </Button>
          <p className="text-white text-xl">{t('chat.title')}</p>
          <img src={chatDarkSmallIcon} alt="Chat" />
        </div>
        <div className="bg-white px-5 py-6 flex-1">
          <div className="overflow-y-auto h-[calc(100vh-16rem)] flex flex-col justify-end md:h-100">
            <div id="chat-box" className="flex flex-col gap-2.5">
              <p className="text-xl">{t('chat.manager')}</p>
              <div className="bg-secondary rounded-xl px-5 py-2.5 w-4/5">
                <p className="text-xl md:text-base opacity-90">{t('chat.manager_message')}</p>
              </div>
              {isSubmitSuccessful && (
                <React.Fragment>
                  <div className="bg-primary rounded-xl px-5 py-2.5 w-4/5 self-end">
                    <p className="text-white text-xl md:text-base">{userMessage}</p>
                  </div>
                  <div className="bg-secondary rounded-xl px-5 py-2.5 w-4/5">
                    <p className="text-xl md:text-base opacity-90">{t('chat.reply_message')}</p>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className={`flex items-center gap-4 mt-8 ${isSubmitSuccessful ? 'opacity-65 pointer-events-none' : ''}`}
          >
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder={t('chat.name_field')}
                    {...register('name')}
                    className={`text-xl md:text-base border rounded-xl placeholder:text-base placeholder:text-center h-10 w-full ${
                      errors.name ? 'border-error' : 'border-black/65'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-base md:text-xs absolute left-0 -top-5 text-error">{errors.name.message}</p>
                  )}
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                    className={`text-xl md:text-base border rounded-xl placeholder:text-base placeholder:text-center h-10 w-full ${
                      errors.email ? 'border-error' : 'border-black/65'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-base md:text-xs absolute left-0 -top-5 text-error">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <textarea
                placeholder={t('chat.message_field')}
                {...register('message')}
                className={`text-xl md:text-base border rounded-xl placeholder:text-base placeholder:text-center h-14 w-full resize-none ${
                  errors.message ? 'border-error' : 'border-black/65'
                }`}
              />
            </div>
            <Button
              variant="outline"
              disabled={isSubmitting}
              borderRadius="full"
              className="self-end flex justify-center items-center border-black/65 p-3 md:h-auto"
              type="submit"
            >
              <img src={arrowUpDarkSmallIcon} alt="Arrow Up" />
            </Button>
          </form>
        </div>
      </div>
    </Popup>
  );
};

export { ChatPopup };
