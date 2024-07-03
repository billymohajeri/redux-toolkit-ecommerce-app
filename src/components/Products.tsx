import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { useEffect } from 'react'
import { fetchData } from '../features/products/productSlice'

const Products = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const { products, loading, error } = useSelector((state: RootState) => state.productReducer)
  console.log(products)
  return <div>List all the products here</div>
}

export default Products
