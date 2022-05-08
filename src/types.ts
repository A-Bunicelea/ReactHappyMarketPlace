import {
  GetProductsRequestAction,
  GetProductsSuccessAction,
  GetProductsFailureAction,
} from './store/actions/productsActions';

import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

import {
  UpdateUserSuccessAction,
  UpdateUserFailureAction,
  FetchUserFailureAction,
} from './store/actions/userActions';

import {
  AddToCartAction,
  RemoveItemAction,
  SubstractQuantityAction,
  AddQuantityAction,
} from './store/actions/cartActions';

export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  // quantity: number;
}

export interface ProductsState {
  isLoading: boolean;
  list: Product[];
  error: string;
}

export interface UserState {
  name: string;
  token?: string;
  isAdmin: boolean;
}

export type ProductsActions =
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;

interface UserLoginState {
  username: string;
  password: string;
  token: string;
  errorMsg: string;
  isAdmin: boolean;
}

export interface AppState {
  products: ProductsState;
  user: UserLoginState;
  cart: CartState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type UserLoginActions =
  | UpdateUserSuccessAction
  | UpdateUserFailureAction
  | FetchUserFailureAction;

export type AppActions = ProductsActions | UserLoginActions | CartActions;

export interface CartState {
  // products: Product[];
  addedProducts: CartProductInterface[];
  total: number;
}

export type CartActions =
  | AddToCartAction
  | RemoveItemAction
  | SubstractQuantityAction
  | AddQuantityAction;

export interface CartProductInterface extends Product {
  quantity: number;
}
