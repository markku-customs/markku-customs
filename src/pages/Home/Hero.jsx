import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation, Trans } from 'react-i18next';

import Button from '../../components/Button';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1 className="font-heading text-6xl md:text-8xl mt-12 sm:mt-20 hero-text">
          <Trans i18nKey="hero.heading">
            You Build.
            <br />
            We Play.
          </Trans>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-prose text-sm sm:text-base leading-8 text-zinc-300">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
          <Button as={Link} to="/#store">
            {t('hero.buttons.store')}
          </Button>
          <Button as={Link} to="/#contact" variant="secondary">
            {t('hero.buttons.contact')}
          </Button>
        </div>
      </div>
      <div className="gradient"></div>
    </section>
  );
};

export default Hero;
