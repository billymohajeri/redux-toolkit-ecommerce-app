import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { useEffect } from 'react'
import { fetchProducts } from '../features/products/productSlice'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const { products, loading, error } = useSelector((state: RootState) => state.productReducer)

  return (
    <div className="container mt-5">
      <h1 className="display-4 py-5 text-center">List of all products</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group px-5">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <Link
              to={`/products/${product.id}`}
              className="list-group-item list-group-item-action"
              aria-current="true"
              state={product}>
              <b>{product.category}</b>: {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
