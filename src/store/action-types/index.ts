export enum ActionType {
  //products actions
  getProductsRequest = 'GET_PRODUCTS_REQUEST',
  getProductsSuccess = 'GET_PRODUCTS_SUCCESS',
  getProductsFailure = 'GET_PRODUCTS_FAILURE',

  // user actions
  updateUserSuccess = 'UPDATE_USER_SUCCESS',
  updateUserFailure = 'UPDATE_USER_FAILURE',
  fetchUserFailure = 'FETCH_USER_FAILURE',

  //cart actions
  addToCart = 'ADD_TO_CART',
  removeItem = 'REMOVE_ITEM',
  substractQuantity = 'SUBSTRACT_QUANTITY',
  addQuantity = 'ADD_QUANTITY',
}
