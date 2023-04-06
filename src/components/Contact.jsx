import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="contact">
      <div className="container gap-2">
        <h2 className="font-heading text-4xl md:text-6xl mb-8">
          <span className="text-red-600 mr-4">#</span>
          {t("links.contact")}
        </h2>
        <ul className="flex gap-10 mb-2 flex-wrap">
          <li className="flex text-sm items-center gap-1">
            <pre className="font-bold text-sm">{t("contact.phone")}</pre>:{" "}
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
          className="contact-image mt-8"
          src="/display-dummy-picture.jpeg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Contact;
