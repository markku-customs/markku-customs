import { useTranslation, Trans } from 'react-i18next';

import Button from '../../components/Button';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form className="w-full lg:w-3/5 flex flex-col gap-4">
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="text-sm" htmlFor="email-input">
            {t('contact.email')}
            <input
              id="email-input"
              type="text"
              className="mt-2 p-4 w-full bg-zinc-800"
            />
          </label>
        </div>
        <div className="flex-1">
          <label className="text-sm" htmlFor="name-input">
            {t('contact.name')}
            <input
              id="name-input"
              type="text"
              className="mt-2 p-4 w-full bg-zinc-800"
            />
          </label>
        </div>
      </div>
      <div>
        <label className="text-sm" htmlFor="message-input">
          {t('contact.message')}
          <textarea
            id="message-input"
            placeholder={t('contact.type-message')}
            className="w-full mt-2 p-4 h-32 text-sm resize-none text-start bg-zinc-800"
          ></textarea>
        </label>
      </div>
      <div>
        <label
          className="text-sm flex gap-4 items-center"
          htmlFor="privacy-policy-checkbox"
        >
          <input
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
        </label>
      </div>
      <div className="mt-4">
        <Button type="submit" onClick={(e) => e.preventDefault()}>
          {t('contact.send')}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
