import { Trans, useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <Container>
        <h1 className="hero-text mt-12 font-heading text-6xl sm:mt-16 md:text-8xl">
          <Trans i18nKey="hero.heading">
            You Build.
            <br />
            We Play.
          </Trans>
        </h1>
        <p className="mt-6 max-w-prose text-sm leading-8 text-zinc-300 sm:mt-8 md:text-base">
          {t('hero.description')}
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row">
          <Button as={Link} to="/#computers">
            {t('hero.buttons.store')}
          </Button>
          <Button as={Link} to="/#contact" variant="secondary">
            {t('hero.buttons.contact')}
          </Button>
        </div>
      </Container>
      <div className="gradient"></div>
    </section>
  );
};

export default Hero;
