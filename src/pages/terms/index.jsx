import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

import Container from '@/components/Container';
import SEO from '@/components/SEO';

import { options } from '@/constants';

const TermsPage = () => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  const { data: page, error } = useSWR(
    '/.netlify/functions/getPage?slug=terms'
  );

  console.log(page);

  return (
    <>
      <SEO
        title={`${t('footer.terms')} | Markku Customs`}
        description={t('seo.description')}
      />

      <Container className="py-8">
        <h1 className="font-heading text-6xl">{t('footer.terms')}</h1>
        {!page ? (
          <div className="mt-8 grid min-h-[8rem] place-items-center rounded-md bg-zinc-800 p-4 text-zinc-400">
            {error ? (
              <div className="text-center">
                <p>{`${error.status} – ${error.info.message[lng]}`}</p>
                <p className="mt-2 text-sm text-zinc-500">
                  {t('automatic-retry')}
                </p>
              </div>
            ) : (
              t('loading')
            )}
          </div>
        ) : (
          <>
            <div className="my-4 w-max bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
              {t('last-updated')}:{' '}
              {new Intl.DateTimeFormat(lng).format(
                new Date(page.sys.updatedAt)
              )}
            </div>
            <div>
              {documentToReactComponents(page.fields.content[lng], options)}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default TermsPage;
