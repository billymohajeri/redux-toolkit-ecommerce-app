import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../store/store'
import { fetchProducts } from '../features/products/productSlice'

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState('')

  const { products, loading, error } = useSelector((state: RootState) => state.productR)

  useEffect(() => {
    dispatch(fetchProducts({ searchValue, sortValue }))
  }, [dispatch, searchValue, sortValue])

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSortValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value)
  }

  const handleReset = () => {
    setSearchValue('')
    setSortValue('')
    dispatch(fetchProducts({ searchValue: '', sortValue: '' }))
  }

  if (loading) <div className="container mt-5">Loading...</div>

  if (error) <div className="container mt-5 text-danger">{error}</div>

  return (
    <div className="container mt-5">
      <h1 className="display-4 py-5 text-center">List of all products</h1>
      <input
        type="text"
        name="searchInput"
        value={searchValue}
        onChange={handleSearchValueChange}
        className="form-control mb-3"
        placeholder="Search for products..."
      />
      <div className="d-flex justify-content-between mb-3">
        <button onClick={handleReset} className="btn btn-secondary">
          Reset
        </button>
        <select
          name="sortSelect"
          value={sortValue}
          onChange={handleSortValueChange}
          className="form-control w-25">
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_asc">Rating: Low to High</option>
          <option value="rating_desc">Rating: High to Low</option>
          <option value="title_asc">Title: A to Z</option>
          <option value="title_desc">Title: Z to A</option>
          <option value="category_asc">Category: A to Z</option>
          <option value="category_desc">Category: Z to A</option>
        </select>
      </div>
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
                {product.id}. <b>{product.title}</b> in {product.category}
                <p>
                  <b>({product.price} $)</b> rate: {product.rating}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
