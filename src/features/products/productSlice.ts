import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FetchProductsParams, ProductsState } from './productType'

const initialState: ProductsState = { products: [], product: null, loading: false, error: null }

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ searchValue = '', sortValue = '' }: FetchProductsParams) => {
    let url = 'https://dummyjson.com/products'
    try {
      const [sortField, sortOrder] = sortValue.split('_')
      if (searchValue) {
        url += `/search?q=${searchValue}`
      }
      if (sortValue) {
        searchValue ? (url += '&') : (url += '?') // This line is meant to handle both sort and search together
        url += `sortBy=${sortField}&order=${sortOrder}`
      }
      console.log(url);
      const response = await fetch(url)
      const data = await response.json()
      if (searchValue) {
        data.products = data.products.filter((product: { title: string }) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      }
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
