import myapi from './apiServices';
import { Product } from '../types';

// interface DataInterface {
//   username: string;
//   password: string;
// }

// interface LogInResponse {
//   token?: string;
//   msg?: string;
//   status?: string;
// }

const getProducts = (productsNumber: string) => {
  return myapi.get<Product[]>('/products?limit=' + productsNumber);
};

const ProductsService = {
  getProducts,
};

export default ProductsService;
