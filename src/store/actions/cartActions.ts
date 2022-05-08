// import { Product } from '../../types';
import { Product } from '../../types';
import { ActionType } from '../action-types';

export interface AddToCartAction {
  type: ActionType.addToCart;
  payload: Product;
}

export interface RemoveItemAction {
  type: ActionType.removeItem;
  payload: string;
}

export interface SubstractQuantityAction {
  type: ActionType.substractQuantity;
  payload: string;
}

export interface AddQuantityAction {
  type: ActionType.addQuantity;
  payload: string;
}

export const addToCart = (product: Product): AddToCartAction => {
  return {
    type: ActionType.addToCart,
    payload: product,
  };
};

export const removeItem = (id: string): RemoveItemAction => {
  return {
    type: ActionType.removeItem,
    payload: id,
  };
};

export const substractQuantity = (id: string): SubstractQuantityAction => {
  return {
    type: ActionType.substractQuantity,
    payload: id,
  };
};

export const addQuantity = (id: string): AddQuantityAction => {
  return {
    type: ActionType.addQuantity,
    payload: id,
  };
};
