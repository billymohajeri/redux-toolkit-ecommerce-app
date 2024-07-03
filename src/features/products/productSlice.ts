import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductsState } from './productType'

const initialState: ProductsState = { products: [], loading: false, error: null }

export const fetchData = createAsyncThunk('products/fetchData', async () => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    console.error(error)
  }
})

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false
        state.error = 'An error occurred'
      })
  }
})

export default productsSlice.reducer
