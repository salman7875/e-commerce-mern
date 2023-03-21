import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import Home from './pages/home/Home'
import UserList from './pages/home/userList/UserList'
import './App.css'
import User from './pages/home/user/User'
import NewUser from './pages/home/newPage/NewUser'
import ProductList from './pages/home/productList/ProductList'
import Product from './pages/home/product/Product'
import NewProduct from './pages/home/newProduct/NewProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'users', element: <UserList /> },
      { path: 'user/:id', element: <User /> },
      { path: 'newuser', element: <NewUser /> },
      { path: 'products', element: <ProductList /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'newProduct', element: <NewProduct /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
