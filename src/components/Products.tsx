import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Products = () => {
  const { products, loading, error } = useSelector((state: RootState) => state.productReducer)
  console.log(products)
  return <div>List all the products here</div>
}

export default Products
