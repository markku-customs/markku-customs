import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import NotFoundPage from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
