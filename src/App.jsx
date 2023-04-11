import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { createClient } from 'contentful';

import StoreItemsContext from './contexts/StoreItemsContext';

import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import NotFoundPage from './pages/NotFound';

// const client = createClient({
//   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
//   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
// });

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/getProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
      .catch((err) => console.log(err));
    // client
    //   .getEntries({ content_type: 'product', locale: '*' })
    //   .then((entries) => setProducts(entries.items))
    //   .catch((err) => console.log(err));
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
