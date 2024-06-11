import { useTranslation } from 'react-i18next';

import { EmailIcon, InstagramIcon, PhoneIcon, TikTokIcon } from '@/icons';

import ContactLink from './ContactLink';

const links = [
  {
    icon: PhoneIcon,
    key: 'contact.phone',
    content: '+358 46 800 4649',
    href: 'tel: +358468004649',
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
    content: '@markkucustoms',
    href: 'https://www.instagram.com/markkucustoms/',
    blank: true,
  },
  {
    icon: TikTokIcon,
    key: 'contact.tiktok',
    content: '@markkucustoms',
    href: 'https://www.tiktok.com/@markkucustoms',
    blank: true,
  },
];

const ContactLinks = () => {
  const { t } = useTranslation();

  return (
    <ul className="contact-links-grid">
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
