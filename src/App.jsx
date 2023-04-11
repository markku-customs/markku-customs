import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import StoreItemsContext from './contexts/StoreItemsContext';

import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import NotFoundPage from './pages/NotFound';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/getProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StoreItemsContext.Provider value={products}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </StoreItemsContext.Provider>
  );
};

export default App;
