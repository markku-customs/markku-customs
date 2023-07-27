import { useTranslation } from 'react-i18next';

import { EmailIcon, InstagramIcon, PhoneIcon } from '@/icons';

import ContactLink from './ContactLink';

const links = [
  {
    icon: PhoneIcon,
    key: 'contact.phone',
    content: '+358 40 932 3040',
    href: 'tel: +358409323040',
    blank: false,
  },
  {
    icon: EmailIcon,
    key: 'contact.email',
    content: 'markkucustoms@gmail.com',
    href: 'mailto: markkucustoms@gmail.com',
    blank: false,
  },
  {
    icon: InstagramIcon,
    key: 'contact.instagram',
    content: '@markku.customs',
    href: 'https://www.instagram.com/markku.customs/',
    blank: true,
  },
];

const ContactLinks = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-wrap gap-8 lg:gap-12">
      {links.map(({ icon, key, content, href, blank }) => (
        <ContactLink
          key={key}
          icon={icon}
          title={t(key)}
          content={content}
          href={href}
          blank={blank}
        />
      ))}
    </ul>
  );
};

export default ContactLinks;
