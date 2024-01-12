import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/common/layout'
import HomePage from './components/pages/HomePage'
import ProductPage from './components/pages/ProductPage'
import ContactPage from './components/pages/ContactPage'
import NotFoundPage from './components/pages/NotFoundPage'
import CartPage from './components/pages/CartPage'
import CheckoutSuccessPage from './components/pages/CheckoutSuccessPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
