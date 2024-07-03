import { createBrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <ProductList /> },
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

export default router
