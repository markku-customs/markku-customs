import { Trans } from 'react-i18next';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-4 mt-auto">
      <div className="container text-center text-xs text-zinc-400">
        <Trans i18nKey="footer" year={year}>
          © {{ year }} Markku Customs. All rights reserved.
        </Trans>
      </div>
      <hr />
      <div className="flex justify-center mt-2 gap-3">
        <div>
          <a
            className="text-xs text-red-600 flex gap-1"
            href="https://www.iubenda.com/privacy-policy/59126036"
            target="_blank"
            rel="noreferrer"
          >
            <pre className="text-white">Privary Policy</pre>⇗
          </a>
        </div>
        <div>
          <a
            className="text-xs text-red-600 flex gap-1"
            href="https://www.termsfeed.com/live/cf5f6825-5ec1-4164-a2f4-c2dae01df582"
            target="_blank"
            rel="noreferrer"
          >
            <pre className="text-white">Terms of Service</pre>⇗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
