// import myapi from '../myaxios';
// import { Product } from '../types';

// // interface DataInterface {
// //   username: string;
// //   password: string;
// // }

// // interface LogInResponse {
// //   token?: string;
// //   msg?: string;
// //   status?: string;
// // }

// const getProducts = (productsNumber: string) => {
//   return myapi.get<Product[]>('/products?limit=' + productsNumber);
// };

// const ProductsService = {
//   getProducts,
// };

// export default ProductsService;
import axios from 'axios';

export default axios.create({
  baseURL: 'https://fakestoreapi.com/',

  headers: {
    'Content-type': 'application/json',
  },
});
