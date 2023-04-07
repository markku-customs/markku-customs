import { useTranslation } from "react-i18next";

import SectionHeading from "./SectionHeading";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="contact">
      <div className="container gap-2">
        <SectionHeading heading={t("links.contact")} />
        <ul className="flex gap-6 lg:gap-12 flex-wrap">
          <li className="flex text-sm items-center gap-1">
            <pre className="font-bold text-sm">{t("contact.phone")}</pre>:
            <a className="hover:text-red-600" href="tel: +358409323040">
              +358 40 932 3040
            </a>
          </li>
          <li className="flex text-sm items-center gap-1">
            <pre className="font-bold text-sm">{t("contact.email")}</pre>:
            <a
              className="hover:text-red-600"
              href="mailto: markkucustoms@gmail.com"
            >
              markkucustoms@gmail.com
            </a>
          </li>
          <li className="flex text-sm items-center gap-1">
            <pre className="font-bold text-sm">{t("contact.instagram")}</pre>:
            <a
              className="hover:text-red-600"
              href="https://www.instagram.com/markku.customs/"
              target="_blank"
            >
              @markku.customs
            </a>
          </li>
        </ul>
        <img
          className="mt-8 max-h-72 w-full object-cover"
          src="/display-dummy-picture.jpeg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Contact;
