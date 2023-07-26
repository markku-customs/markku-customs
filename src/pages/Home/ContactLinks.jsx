import { useTranslation } from 'react-i18next';

import ContactLink from './ContactLink';

const ContactLinks = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-wrap gap-8 lg:gap-12">
      <ContactLink
        icon="/phone-icon.svg"
        title={t('contact.phone')}
        content="+358 40 932 3040"
        href="tel: +358409323040"
      />
      <ContactLink
        icon="/email-icon.svg"
        title={t('contact.email')}
        content="markkucustoms@gmail.com"
        href="mailto: markkucustoms@gmail.com"
      />
      <ContactLink
        icon="/instagram-icon.svg"
        title={t('contact.instagram')}
        content="@markku.customs"
        href="https://www.instagram.com/markku.customs/"
        blank
      />
    </ul>
  );
};

export default ContactLinks;
