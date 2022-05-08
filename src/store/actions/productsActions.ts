import { Dispatch } from 'redux';
import { Product } from '../../types';
import { ActionType } from '../action-types';
import ProductsService from '../../api/productsServices';

export interface GetProductsRequestAction {
  type: ActionType.getProductsRequest;
}

export interface GetProductsSuccessAction {
  type: ActionType.getProductsSuccess;
  payload: Product[];
}

export interface GetProductsFailureAction {
  type: ActionType.getProductsFailure;
  payload: string;
}

export const getProductsRequest = (): GetProductsRequestAction => {
  return {
    type: ActionType.getProductsRequest,
  };
};

export const getProductsSuccess = (
  products: Product[]
): GetProductsSuccessAction => {
  return {
    type: ActionType.getProductsSuccess,
    payload: products,
  };
};

export const getProductsFailure = (error: string): GetProductsFailureAction => {
  return {
    type: ActionType.getProductsFailure,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch: Dispatch): void => {
    dispatch(getProductsRequest());
    let productsNumber = '';

    const savedToLocalStorage = localStorage.getItem('numberOfProducts');
    if (savedToLocalStorage !== null) {
      productsNumber = savedToLocalStorage;
    } else {
      productsNumber = '10';
    }

    ProductsService.getProducts(productsNumber)
      .then((resp) => {
        dispatch(getProductsSuccess(resp.data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getProductsFailure(errorMessage));
      });
  };
};
