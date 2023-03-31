import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { Route, Routes } from "react-router-dom"
import { StoreItemsContext } from './contexts/StoreItemsContext'

const storeItems = [{ name: "Product 1", price: 550, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis debitis modi iure porro? Sit debitis eligendi optio beatae quas harum eum illo aut laborum." }, { name: "Product 2", price: 700, description: "This is description." }, {name: "Product 3", price: 800, description: "This is description." }]

const App = () => {
  return (
    <StoreItemsContext.Provider value={storeItems}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </StoreItemsContext.Provider>
  )
}

export default App
