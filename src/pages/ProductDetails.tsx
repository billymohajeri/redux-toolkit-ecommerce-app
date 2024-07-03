import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { useEffect } from 'react'
import { fetchSingleProduct } from '../features/products/productSlice'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  //   const { id } = useParams()
  const { product, loading, error } = useSelector((state: RootState) => state.productReducer)
  const dispatch: AppDispatch = useDispatch()
  const id = 5
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id))
    }
  }, [dispatch, id])

  console.log(product)

  return <div>Single product here</div>
}
export default ProductDetails
