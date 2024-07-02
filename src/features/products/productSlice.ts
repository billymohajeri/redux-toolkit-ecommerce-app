import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductsState } from './productType'

const initialState: ProductsState = { products: [], loading: false, error: null }

export const fetchData = createAsyncThunk('products/fetchData', async () => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
    console.error(error)
  }
})

const productsSlice = createSlice({ name: 'products', initialState: initialState, reducers: {} })

export default productsSlice.reducer
