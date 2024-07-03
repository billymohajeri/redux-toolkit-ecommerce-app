import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../store/store'
import { fetchSingleProduct } from '../features/products/productSlice'

const ProductDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { product, loading, error } = useSelector((state: RootState) => state.productR)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id))
    }
  }, [dispatch, id])

  if (loading) {
    return <div className="container mt-5">Loading...</div>
  }

  if (error) {
    return <div className="container mt-5 text-danger">{error}</div>
  }

  if (!product) {
    return <div className="container mt-5">Product not found.</div>
  }

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.images[0]} className="card-img" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="card-text">
                <strong>Price:</strong> ${product.price}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {product.rating} ({product.reviews.length} reviews)
              </p>
              <p className="card-text">
                <small className="text-muted">Product ID: {product.id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
