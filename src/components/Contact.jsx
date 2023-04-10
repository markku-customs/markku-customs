import { useTranslation } from 'react-i18next';

import SectionHeading from './SectionHeading';
import ContactLinks from './ContactLinks';
import ContactForm from './ContactForm';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="contact">
      <div className="container gap-2">
        <SectionHeading className="mb-8">{t('links.contact')}</SectionHeading>
        <ContactLinks />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
