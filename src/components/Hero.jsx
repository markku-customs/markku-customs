import { HashLink as Link } from "react-router-hash-link";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1 className="font-heading text-6xl md:text-8xl mt-12 sm:mt-20 hero-text hero-catchphrase">
          <Trans i18nKey={"hero.heading"}>
            You Build.
            <br />
            We Play.
          </Trans>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-prose text-sm sm:text-base leading-8 text-center text-zinc-300">
          {t("hero.description")}
        </p>
        <div className="flex flex-wrap gap-4 mt-6 sm:mt-8 hero-button-responsive">
          <Link
            to="/#store"
            className="button | bg-red-600 hover:brightness-125"
          >
            {t("hero.buttons.store")}
          </Link>
          <Link
            to="/#contact"
            className="button | bg-zinc-950 hover:brightness-125"
          >
            {t("hero.buttons.contact")}
          </Link>
        </div>
      </div>
      <div className="gradient"></div>
    </section>
  );
};

export default Hero;
