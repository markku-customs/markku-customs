import { Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';

import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import ProductPage from './pages/product';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SWRConfig>
  );
};

export default App;
