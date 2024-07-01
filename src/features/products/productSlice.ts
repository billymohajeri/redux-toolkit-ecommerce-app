import { createSlice } from '@reduxjs/toolkit'
import { ProductsState } from './productType'

const initialState: ProductsState = { products: [], loading: false, error: null }

const productsSlice = createSlice({ name: 'products', initialState: initialState, reducers: {} })

export default productsSlice.reducer
