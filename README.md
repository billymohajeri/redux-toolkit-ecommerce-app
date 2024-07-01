# Redux-toolkit Assignment: E-commerce Application

This assignment will be testing your Redux Toolkit knowledge.

## APIs

- official API doc: `https://dummyjson.com/`
- All products: GET `https://dummyjson.com/products`
- Single product: GET `https://dummyjson.com/products/<id>`
- Search products: GET `https://dummyjson.com/products/search?q=<query>`

### Level 1: Basic Requirements

Using Redux, create actions to fetch APIs for:

- Get all products
- Get a single product by ID

Store the data in the Redux store. The state should include attributes for an array of items, loading, and error.

Handle cases such as request, success, and failure:

- Show the loading state (using a Loading component or simple text) when loading is true.
- Display an error message if there is any error while fetching data.

This assignment will be completed in TypeScript, so remember to define types for variables, constants, actions, and props.

### Level 2: Additional Requirements

- Add a feature to search for products by name.
- Implement a sort feature (e.g., by price, by rating).
- Deploy it to any hosting site such as Vercel or Netlify.
- Detail Page: Create a detail page for each product that shows more information about the selected product.

### Level 3: Bonus Requirements (Optional)

- Pagination: Implement pagination for the list of products.
- Form Validation: Add form validation for the edit feature using a library like Formik or React Hook Form with Yup.

### Deadline: 4 July, 23:59

Happy Coding.
