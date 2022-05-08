import { productsReducer } from './reducers/productsReducers';
// import { userReducer } from './reducers/userReducers';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore, Store } from 'redux';
import { AppActions, AppState } from '../types';
import { userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
});

// const rootReducer = (state: any = {}, action: any) => {
//   return {
//     products: productsReducer(state.products, action),
//     user: userReducer(state.user, action),
//     cart: cartReducer(state.cart, { ...action, ...state.products }),
//   };
// };

// const middleware = [thunk];

const store: Store<AppState, AppActions> = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)

  // composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
