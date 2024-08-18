import { Trans } from 'react-i18next';

import { getImageSrc } from '@/utils';

import { LNG } from '@/constants';

import { ArrowOutwardIcon } from '@/icons';

const PartnerItem = ({ partner }) => {
  const { logo, name, since, link } = partner.fields;

  const year = new Date(since[LNG.en]).getFullYear();

  return (
    <a
      className="group block bg-zinc-900"
      href={link[LNG.en]}
      target="_blank"
      rel="noreferrer"
      aria-labelledby="partner-name"
    >
      <div className="grid h-full w-full place-items-center px-16 py-12">
        <img src={`${getImageSrc(logo[LNG.en])}?fm=webp&h=64`} alt="" />
      </div>
      <div className="bg-zinc-800 p-4">
        <div className="flex items-center gap-1">
          <h3 className="font-semibold group-hover:underline" id="partner-name">
            {name[LNG.en]}
          </h3>
          <ArrowOutwardIcon className="h-4 w-4" />
        </div>
        <p className="mt-1 text-sm text-zinc-400">
          <Trans i18nKey="since" year={year}>
            Since {{ year }}
          </Trans>
        </p>
      </div>
    </a>
  );
};

export default PartnerItem;
