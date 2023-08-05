import { Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';

import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import ProductPage from './pages/Product';

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
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
