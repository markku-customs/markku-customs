import React, { useEffect } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

import Container from '@/components/Container';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';

import { options } from '@/constants';

const TermsPage = () => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  const { data: page, error } = useSWR(
    '/.netlify/functions/getPage?slug=terms'
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEO title={`${t('footer.terms')} | Markku Customs`} />

      <Container className="py-8">
        <h1 className="font-heading text-6xl">{t('footer.terms')}</h1>
        {!page ? (
          <Loading className="mt-8" error={error} />
        ) : (
          <>
            <div className="my-4 w-max bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
              {t('last-updated')}:{' '}
              {new Intl.DateTimeFormat(lng).format(
                new Date(page.sys.updatedAt)
              )}
            </div>
            <section>
              {documentToReactComponents(page.fields.content[lng], options)}
            </section>
          </>
        )}
      </Container>
    </>
  );
};

export default TermsPage;
