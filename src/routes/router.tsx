import { createBrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Navbar from '../components/Navbar'
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <ProductList />,
    children: [
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

export default router
