import { HashLink as Link } from "react-router-hash-link";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero" id="home">
      <div className="container mx-auto">
        <h1 className="text-white ff-heading text-6xl md:text-8xl mt-20 hero-text">
          <Trans i18nKey={"hero.heading"}>
            You Build.
            <br />
            We Play.
          </Trans>
        </h1>
        <p className="text-white hero-description mt-10 leading-8 max-w-prose">
          {t("hero.description")}
        </p>
        <ul className="flex gap-4 mt-10">
          <li className="hover:scale-110 transition duration-100">
            <Link
              to="/#store"
              className="px-10 bg-red-600 border-white text-xs py-4 uppercase tracking-[.30em] font-semibold"
            >
              {t("hero.buttons.store")}
            </Link>
          </li>
          <li className="hover:scale-110 transition duration-100">
            <Link
              to="#contact"
              className="px-10 bg-zinc-950 text-white border-red-600 text-xs py-4 uppercase tracking-[.30em] font-semibold"
            >
              {t("hero.buttons.contact")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
