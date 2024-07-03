import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../store/store'
import { fetchProducts } from '../features/products/productSlice'

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch()

  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearch(event.target.value)
  }

  const { products, loading, error } = useSelector((state: RootState) => state.productR)

  return (
    <div className="container mt-5">
      <h1 className="display-4 py-5 text-center">List of all products</h1>
      <input
        type="text"
        name="searchInput"
        value={search}
        onChange={handleSearchChange}
        className="form-control mb-3"
        placeholder="Search for products..."
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group px-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="list-group-item list-group-item-action list-group-item-primary">
            <Link
              to={`/products/${product.id}`}
              className="d-flex align-items-center text-dark"
              aria-current="true"
              state={product}>
              <img
                src={product.images[0]}
                className="img-thumbnail me-3"
                style={{ width: '50px', height: '50px' }}
                alt={product.title}
              />
              <div>
                <b>{product.title}</b> ({product.category})
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
