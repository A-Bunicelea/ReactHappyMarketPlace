import { CartActions, CartState, CartProductInterface } from '../../types';
import { ActionType } from '../action-types';

const initialState: CartState = {
  // products: listData,
  addedProducts: [],
  total: 0,
};

const calcTotal = (prevTotal: number, price: number, quantity = 1) => {
  return prevTotal + price * quantity;
};

export const cartReducer = (
  state = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ActionType.addToCart: {
      const existingProduct = state.addedProducts.find(
        (product) => product.id == action.payload.id
      );

      if (existingProduct) {
        const updatedAdded: CartProductInterface[] = [...state.addedProducts];
        const index: number = updatedAdded.findIndex(
          (product: CartProductInterface) => product.id === action.payload.id
        );

        updatedAdded.splice(index, 1, {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        });

        return {
          ...state,
          addedProducts: [...updatedAdded],
          // total: state.total + Number(existingProduct.price),

          total: calcTotal(state.total, Number(existingProduct.price)),
        };
      } else {
        return {
          ...state,
          addedProducts: [
            ...state.addedProducts,
            { ...action.payload, quantity: 1 },
          ],
          // total: state.total + Number(action.payload.price),
          total: calcTotal(state.total, Number(action.payload.price)),
        };
      }
    }

    case ActionType.removeItem: {
      const remainingProducts = state.addedProducts.filter(
        (product) => product.id !== action.payload
      );
      //aici trebuie sa gasesc produsul cred
      const existingProduct = state.addedProducts.find(
        (product) => product.id == action.payload
      );

      if (existingProduct) {
        return {
          ...state,
          addedProducts: [...remainingProducts],
          // total:
          //   state.total -
          //   Number(existingProduct.price) * existingProduct.quantity,
          total: calcTotal(
            state.total,
            -Number(existingProduct.price),
            existingProduct.quantity
          ),
        };
      }

      return state;
    }

    case ActionType.addQuantity: {
      const existingProduct = state.addedProducts.find(
        (product) => product.id == action.payload
      );

      const updatedAdded: CartProductInterface[] = [...state.addedProducts];
      const index: number = updatedAdded.findIndex(
        (product: CartProductInterface) => product.id === action.payload
      );

      if (existingProduct) {
        updatedAdded.splice(index, 1, {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        });

        return {
          ...state,
          addedProducts: updatedAdded,
          // total: state.total + Number(existingProduct.price),
          total: calcTotal(state.total, Number(existingProduct.price)),
        };
      }

      return state;
    }

    case ActionType.substractQuantity: {
      const existingProduct = state.addedProducts.find(
        (product) => product.id == action.payload
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          const remainingProducts = state.addedProducts.filter(
            (product) => product.id !== existingProduct.id
          );

          return {
            ...state,
            addedProducts: remainingProducts,
            // total: state.total - Number(existingProduct.price),
            total: calcTotal(state.total, -Number(existingProduct.price)),
          };
        }

        const updatedAdded: CartProductInterface[] = [...state.addedProducts];
        const index: number = updatedAdded.findIndex(
          (product: CartProductInterface) => product.id === action.payload
        );

        updatedAdded.splice(index, 1, {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        });

        return {
          ...state,
          addedProducts: updatedAdded,
          // total: state.total - Number(existingProduct.price),
          total: calcTotal(state.total, -Number(existingProduct.price)),
        };
      } else return state;
    }

    default:
      return state;
  }
};

export default cartReducer;
