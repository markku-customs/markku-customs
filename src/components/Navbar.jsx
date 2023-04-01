import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="bg-zinc-950 py-4 border-b-2 border-red-600 sticky top-0 left-0 z-50">
      <div className="container mx-auto flex gap-3 justify-between">
        <Link to="/">
          <div className="flex gap-4">
            <img src="/logo.svg" alt="" />
            <h1 className="text-white text-xl ff-heading">
              {t("markku-customs")}
            </h1>
          </div>
        </Link>
        <div className="flex gap-6 ff-body">
          <ul className="grow flex gap-4 justify-between items-center">
            <Link to="/#home">
              <li className="text-base hover:text-red-600 hover:scale-125">
                Home
              </li>
            </Link>
            <Link to="/#store">
              <li className="text-base hover:text-red-600 hover:scale-125">
                Store
              </li>
            </Link>
            <Link to="/#contact">
              <li className="text-base hover:text-red-600 hover:scale-125">
                Contact
              </li>
            </Link>
          </ul>
          <div className="grow flex gap-4">
            <img
              onClick={() => i18n.changeLanguage("en")}
              className="hover:scale-125"
              src="/england.svg"
              alt="English"
            />
            <img
              onClick={() => i18n.changeLanguage("fi")}
              className="hover:scale-125"
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
