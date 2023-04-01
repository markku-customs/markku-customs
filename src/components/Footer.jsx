import { Trans } from "react-i18next";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-4 mt-3">
      <div className="container mx-auto text-center text-xs text-zinc-400">
        <Trans i18nKey="footer" year={year}>
          © {{year}} Markku Customs. All rights reserved.
        </Trans>
      </div>
    </footer>
  );
};

export default Footer;
