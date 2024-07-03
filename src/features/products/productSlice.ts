import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductsState } from './productType'

const initialState: ProductsState = { products: [], product: null, loading: false, error: null }

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (searchValue: string) => {
    let url = 'https://dummyjson.com/products'
    try {
      if (searchValue) {
        // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
        url += `/search?q=${searchValue}`
      }
      const response = await fetch(url)
      const data = await response.json()
      return data.products
    } catch (error) {
      console.log(error)
    }
  }
)

export const fetchSingleProduct = createAsyncThunk(
  'products/fetchSingleProduct',
  async (id: string) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      console.log(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false
        state.error = 'An error occurred'
      })
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.loading = false
        state.error = 'An error occurred'
      })
  }
})

export default productsSlice.reducer
