import { Suspense, lazy } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';

import Loading from '@/components/Loading';
import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

const HomePage = lazy(() => import('./pages/home'));
const NotFoundPage = lazy(() => import('./pages/not-found'));
const ProductPage = lazy(() => import('./pages/product'));
const PrivacyPage = lazy(() => import('./pages/privacy'));
const TermsPage = lazy(() => import('./pages/terms'));

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const App = () => {
  const { t } = useTranslation();

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 600000, // 10 mins
        suspense: true,
      }}
    >
      <Layout>
        <ErrorBoundary
          fallback={
            <Container className="flex h-full flex-col items-center justify-center">
              <h1 className="font-heading text-6xl">{t('error.title')}</h1>
              <p className="mt-2 font-semibold">{t('error.subtitle')}</p>
              <Button onClick={() => window.location.reload()} className="mt-8">
                {t('error.button')}
              </Button>
            </Container>
          }
        >
          <Suspense
            fallback={
              <Container>
                <Loading className="mt-8" />
              </Container>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </SWRConfig>
  );
};

export default App;
