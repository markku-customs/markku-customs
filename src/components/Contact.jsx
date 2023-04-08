import { useTranslation } from "react-i18next";

import SectionHeading from "./SectionHeading";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="contact">
      <div className="container gap-2">
        <SectionHeading heading={t("links.contact")} />
        <ul className="flex gap-3 lg:gap-9 flex-wrap">
          <li className="flex text-sm items-center gap-2">
            <div className="contact-right">
                <img className="rounded-md" src="/phone-icon.png" alt="" />
            </div>
            <div className="contact-left">
              <pre className="font-thin text-gray-400 text-sm">{t("contact.phone")}</pre>
              <a className="hover:text-red-600" href="tel: +358409323040">
                +358 40 932 3040
              </a>
            </div>
          </li>
          <li className="flex text-sm items-center gap-2">
            <div className="contact-right">
              <img className="rounded-md" src="/email-icon.png" alt="" />
            </div>
            <div className="contact-left">
              <pre className="font-thin text-gray-400 text-sm">{t("contact.email")}</pre>
              <a
                className="hover:text-red-600"
                href="mailto: markkucustoms@gmail.com"
              >
                markkucustoms@gmail.com
              </a>
            </div>
          </li>
          <li className="flex text-sm items-center gap-2">
            <div className="contact-right">
              <img className="rounded-md" src="/instagram-icon.png" alt="" />
            </div>
            <div className="contact-left">
              <pre className="font-thin text-gray-400 text-sm">{t("contact.instagram")}</pre>
              <a
                className="hover:text-red-600"
                href="https://www.instagram.com/markku.customs/"
                target="_blank"
              >
                @markku.customs
              </a>
            </div>
          </li>
        </ul>
        <div className="forms-container w-3/5 flex flex-col gap-4">
          <div className="forms-top mt-9 flex flex-row gap-5">
            <div className="flex flex-col w-2/4">
              <label className="text-sm" htmlFor="email-input">Email</label>
              <input id="email-input" type="text" className="w-full bg-stone-800" />
            </div>
            <div className="flex flex-col w-2/4">
              <label className="text-sm" htmlFor="name-input">Name</label>
              <input id="name-input" type="text" className="w-full bg-stone-800" />
            </div>
          </div>
          <div className="forms-bottom">
            <label className="text-sm" htmlFor="message-input">Message</label>
            <input id="message-input" type="text" placeholder="Type your message here..." className="w-full h-32 text-sm resize-none text-start bg-stone-800" />
          </div>
          <div className="forms-privacy-policy flex flex-row gap-3 items-center">
            <input id="privacy-policy-checkbox" type="checkbox" className="h-4 w-4" />
            <label className="text-sm flex flex-row" htmlFor="privacy-policy-checkbox">By selecting this, you agree to <pre> </pre><a className="text-sm hover:decoration-solid text-red-600"> privacy policy</a>.</label>
          </div>
          <div>
            <button className="px-12 py-3 bg-red-600 text-sm">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
