import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="bg-zinc-950 py-4 border-b-2 border-red-600 sticky top-0 z-50">
      <div className="container mx-auto flex gap-3 justify-between">
        <Link to="/">
          <div className="flex gap-4">
            <img src="/logo.svg" alt="" />
            <h1 className="text-xl font-heading">{t("markku-customs")}</h1>
          </div>
        </Link>
        <div className="flex gap-6 ff-body">
          <ul className="grow flex gap-6 justify-between items-center">
            <Link to="/#home">
              <li className="text-base hover:text-red-600 hover:scale-110">
                {t("home")}
              </li>
            </Link>
            <Link to="/#store">
              <li className="text-base hover:text-red-600 hover:scale-110">
                {t("store")}
              </li>
            </Link>
            <Link to="/#contact">
              <li className="text-base hover:text-red-600 hover:scale-110">
                {t("contact")}
              </li>
            </Link>
          </ul>
          <div className="grow flex gap-4 items-center">
            <img
              onClick={() => i18n.changeLanguage("en")}
              className="hover:scale-110 h-4 transition duration-100"
              src="/england.svg"
              alt="English"
            />
            <img
              onClick={() => i18n.changeLanguage("fi")}
              className="hover:scale-110 h-4 transition duration-100"
              src="/finland.svg"
              alt="Finnish"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
