import { useEffect } from 'react';

import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';

import Button from '@/components/Button';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm();

  const { t } = useTranslation();

  const onSubmit = async (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        '/.netlify/functions/sendEmail',
        requestOptions
      );
      const jsonData = await response.json();

      console.log(jsonData);
      toast.success(t('contact.feedback.success'));
    } catch (error) {
      console.log(error);
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
              {...register('email', {
                required: true,
                pattern: /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              id="email-input"
              type="text"
              className={clsx(
                'mt-2 w-full bg-zinc-800 p-4',
                errors.email && 'ring-1 ring-red-600'
              )}
            />
            {errors.email && (
              <span className="text-red-600">{t('input.required')}</span>
            )}
          </label>
        </div>
        <div className="flex-1">
          <label className="text-sm" htmlFor="name-input">
            {t('contact.name')}
            <input
              {...register('name', { required: true })}
              id="name-input"
              type="text"
              className={clsx(
                'mt-2 w-full bg-zinc-800 p-4',
                errors.name && 'ring-1 ring-red-600'
              )}
            />
            {errors.name && (
              <span className="text-red-600">{t('input.required')}</span>
            )}
          </label>
        </div>
      </div>
      <div>
        <label className="text-sm" htmlFor="phone-input">
          {t('contact.phone')} ({t('optional')})
          <InputMask
            mask="+358 99 999 9999"
            maskChar={null}
            alwaysShowMask
            {...register('phone')}
            id="phone-input"
            className={clsx(
              'mt-2 w-full bg-zinc-800 p-4',
              errors.phone && 'ring-1 ring-red-600'
            )}
          />
          {errors.phone && (
            <span className="text-red-600">{t('input.required')}</span>
          )}
        </label>
      </div>
      <div>
        <label className="text-sm" htmlFor="message-input">
          {t('contact.message')}
          <textarea
            {...register('message', { required: true })}
            id="message-input"
            placeholder={t('contact.type-message')}
            className={clsx(
              'mt-2 h-32 w-full resize-none bg-zinc-800 p-4 text-start text-sm',
              errors.message && 'ring-1 ring-red-600'
            )}
          ></textarea>
          {errors.message && (
            <span className="text-red-600">{t('input.required')}</span>
          )}
        </label>
      </div>
      <div>
        <label
          className="flex items-center gap-4 text-sm"
          htmlFor="privacy-policy-checkbox"
        >
          <input
            {...register('privacy', { required: true })}
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
            <span className="text-red-600">{t('input.required')}</span>
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
