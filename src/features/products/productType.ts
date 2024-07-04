type Dimensions = {
  width: number
  height: number
  depth: number
}

type Review = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

type Meta = {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export type ProductsState = {
  products: Product[]
  product: Product | null
  loading: boolean
  error: null | string
  totalProducts: number
}

export type FetchProductsParams = {
  searchValue?: string
  sortValue?: string
  currentPage: number
  productsPerPage: number
}

export type PaginationProps = {
  totalPages: number
  currentPage: number
  handleCurrentPageChange: (page: number) => void
}
