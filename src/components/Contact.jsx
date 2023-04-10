import { useTranslation } from 'react-i18next';

import SectionHeading from './SectionHeading';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="contact">
      <div className="container gap-2">
        <SectionHeading className="mb-8">{t('links.contact')}</SectionHeading>
        <ul className="flex gap-8 lg:gap-12 flex-wrap">
          <li className="flex items-center gap-4">
            <img className="rounded-md" src="/phone-icon.png" alt="" />
            <div>
              <span className="block text-zinc-400 text-sm">
                {t('contact.phone')}
              </span>
              <a className="hover:text-red-600" href="tel: +358409323040">
                +358 40 932 3040
              </a>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img className="rounded-md" src="/email-icon.png" alt="" />
            <div>
              <span className="block text-zinc-400 text-sm">
                {t('contact.email')}
              </span>
              <a
                className="hover:text-red-600"
                href="mailto: markkucustoms@gmail.com"
              >
                markkucustoms@gmail.com
              </a>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img className="rounded-md" src="/instagram-icon.png" alt="" />
            <div>
              <span className="block text-zinc-400 text-sm">
                {t('contact.instagram')}
              </span>
              <a
                className="hover:text-red-600"
                href="https://www.instagram.com/markku.customs/"
                target="_blank"
                rel="noreferrer"
              >
                @markku.customs
              </a>
            </div>
          </li>
        </ul>
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
                By selecting this, you agree to our{' '}
                <a
                  className=" text-red-600 underline"
                  href="https://www.iubenda.com/privacy-policy/59126036"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="button | bg-red-600 hover:brightness-125"
            >
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
