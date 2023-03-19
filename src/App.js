import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Root from './pages/Root'
import ErrorElement from './pages/ErrorElement'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products/:category', element: <ProductList /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'cart', element: <Cart /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
