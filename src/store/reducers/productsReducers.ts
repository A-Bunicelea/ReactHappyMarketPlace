import { ProductsActions, ProductsState } from '../../types';
import { ActionType } from '../action-types';

// interface QuantityObjInterface {
//   quantity: number;
// }

// function mergeObjects(obj1: Product, obj2: QuantityObjInterface) {
//   return { ...obj1, ...obj2 };
// }

// const quantity: QuantityObjInterface = {
//   quantity: 0,
// };

const initialState: ProductsState = {
  isLoading: true,
  list: [],
  error: '',
};

export const productsReducer = (
  state = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case ActionType.getProductsRequest:
      return { ...state, isLoading: true };

    case ActionType.getProductsSuccess:
      // let newList = [...action.payload];
      // newList = newList.map((product) => mergeObjects(product, quantity));

      return {
        isLoading: false,
        // list: action.payload,
        list: [...action.payload],
        error: '',
      };

    case ActionType.getProductsFailure:
      return {
        isLoading: false,
        list: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
