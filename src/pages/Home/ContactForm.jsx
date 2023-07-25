import { useForm } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import Button from '../../components/Button';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      toast.success('Submission successful!');
    } catch (error) {
      console.log(error);
      toast.error('An error occured! See console for more details.');
    }
  };

  return (
    <form
      className="w-full lg:w-3/5 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
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
              className="mt-2 p-4 w-full bg-zinc-800"
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
              className="mt-2 p-4 w-full bg-zinc-800"
            />
            {errors.name && (
              <span className="text-red-600">{t('input.required')}</span>
            )}
          </label>
        </div>
      </div>
      <div>
        <label className="text-sm" htmlFor="phone-input">
          {t('contact.phone')}
          <InputMask
            mask="+358 99 999 9999"
            maskChar={null}
            alwaysShowMask
            {...register('phone')}
            id="phone-input"
            type="tel"
            className="w-full mt-2 p-4 bg-zinc-800"
          />
        </label>
      </div>
      <div>
        <label className="text-sm" htmlFor="message-input">
          {t('contact.message')}
          <textarea
            {...register('message', { required: true })}
            id="message-input"
            placeholder={t('contact.type-message')}
            className="w-full mt-2 p-4 h-32 text-sm resize-none text-start bg-zinc-800"
          ></textarea>
          {errors.message && (
            <span className="text-red-600">{t('input.required')}</span>
          )}
        </label>
      </div>
      <div>
        <label
          className="text-sm flex gap-4 items-center"
          htmlFor="privacy-policy-checkbox"
        >
          <input
            {...register('privacy', { required: true })}
            id="privacy-policy-checkbox"
            type="checkbox"
            className="h-4 w-4 accent-red-600"
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
        <Button type="submit">{t('contact.send')}</Button>
      </div>
    </form>
  );
};

export default ContactForm;
