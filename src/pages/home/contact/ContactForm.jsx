import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useHookFormMask } from 'use-mask-input';
import * as yup from 'yup';

import Button from '@/components/ui/Button';

import { LNG } from '@/constants';

const schema = yup.object().shape({
  email: yup
    .string()
    .email({
      [LNG.en]: 'Email is not valid.',
      [LNG.fi]: 'Sähköposti ei ole kelvollinen.',
    })
    .required({
      [LNG.en]: 'Email is a required field.',
      [LNG.fi]: 'Sähköposti on pakollinen kenttä.',
    }),
  name: yup.string().required({
    [LNG.en]: 'Name is a required field.',
    [LNG.fi]: 'Nimi on pakollinen kenttä.',
  }),
  phone: yup.string(),
  message: yup
    .string()
    .required({
      [LNG.en]: 'Message is a required field.',
      [LNG.fi]: 'Viesti on pakollinen kenttä.',
    })
    .max(1000, {
      [LNG.en]: 'Message can contain a maximum of 1000 characters.',
      [LNG.fi]: 'Viestissä saa olla enintään 1000 merkkiä.',
    }),
  privacy: yup.boolean().oneOf([true], {
    [LNG.en]: 'You must agree to our privacy policy.',
    [LNG.fi]: 'Sinun täytyy hyväksyä tietosuojaselosteemme.',
  }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm({ resolver: yupResolver(schema) });
  const registerWithMask = useHookFormMask(register);

  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  const onSubmit = async (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    try {
      const response = await toast.promise(
        fetch('/.netlify/functions/sendEmail', requestOptions),
        {
          pending: t('contact.feedback.pending'),
          success: t('contact.feedback.success'),
          error: t('contact.feedback.error'),
        }
      );
      console.info(response);
    } catch (error) {
      console.error(error);
      toast.error(t('contact.feedback.error'));
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <form
      className="flex w-full flex-col gap-4 lg:w-3/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label className="text-sm" htmlFor="email-input">
            {t('contact.email')}
            <input
              {...register('email')}
              id="email-input"
              type="text"
              className={clsx(
                'mt-2 w-full bg-zinc-800 p-4',
                errors.email && 'ring-1 ring-red-600'
              )}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message[lng]}</span>
            )}
          </label>
        </div>
        <div className="flex-1">
          <label className="text-sm" htmlFor="name-input">
            {t('contact.name')}
            <input
              {...register('name')}
              id="name-input"
              type="text"
              className={clsx(
                'mt-2 w-full bg-zinc-800 p-4',
                errors.name && 'ring-1 ring-red-600'
              )}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message[lng]}</span>
            )}
          </label>
        </div>
      </div>
      <div>
        <label className="text-sm" htmlFor="phone-input">
          {t('contact.phone')} ({t('optional')})
          <input
            {...registerWithMask('phone', '+358 99 9999999[9]')}
            id="phone-input"
            className={clsx(
              'mt-2 w-full bg-zinc-800 p-4',
              errors.phone && 'ring-1 ring-red-600'
            )}
          />
          {errors.phone && (
            <span className="text-red-600">{errors.phone.message}</span>
          )}
        </label>
      </div>
      <div>
        <label className="text-sm" htmlFor="message-input">
          {t('contact.message')}
          <textarea
            {...register('message')}
            id="message-input"
            placeholder={t('contact.type-message')}
            className={clsx(
              'mt-2 h-32 w-full resize-none bg-zinc-800 p-4 text-start text-sm',
              errors.message && 'ring-1 ring-red-600'
            )}
          ></textarea>

          <div className="flex justify-between">
            {errors.message && (
              <span className="text-red-600">
                {errors.message.message[lng]}
              </span>
            )}
            <p className="text-sm text-zinc-400">
              {watch('message') ? `${watch('message').length}/1000` : ''}
            </p>
          </div>
        </label>
      </div>
      <div>
        <label
          className="flex items-center gap-4 text-sm"
          htmlFor="privacy-policy-checkbox"
        >
          <input
            {...register('privacy')}
            id="privacy-policy-checkbox"
            type="checkbox"
            className={clsx(
              'h-4 w-4 accent-red-600',
              errors.privacy && 'ring-1 ring-red-600'
            )}
          />
          <span>
            <Trans i18nKey="privacy-checkbox">
              By selecting this, you agree to our{' '}
              <a
                className=" text-red-600 underline"
                href="https://www.iubenda.com/privacy-policy/59126036"
                target="_blank"
                rel="noreferrer"
              >
                privacy policy
              </a>
              .
            </Trans>
          </span>
          {errors.privacy && (
            <span className="text-red-600">{errors.privacy.message[lng]}</span>
          )}
        </label>
      </div>
      <div className="mt-4">
        <Button type="submit" disabled={isSubmitting}>
          {t('contact.send')}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
