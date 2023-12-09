import { Suspense, lazy } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';

import Layout from '@/components/layout/Layout';

import ErrorView from '@/views/error';
import LoadingView from '@/views/loading';

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
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 600000, // 10 mins
      }}
    >
      <Layout>
        <ErrorBoundary fallback={<ErrorView />}>
          <Suspense fallback={<LoadingView />}>
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
