import { ActionType } from '../action-types';
import { UserActions } from '../actions/userActions';
import constants from '../../models/constants';

interface UserState {
  username: string;
  password: string;
  token: string;
  errorMsg: string;
  isAdmin: boolean;
}
// const initialState: UserState = {
//   username: '',
//   password: '',
//   token: '',
//   errorMsg: '',
//   isAdmin: false,
// };

const isAdmin = localStorage.getItem('isAdmin');
const tokenStorage = localStorage.getItem('token');

const initialState: UserState = {
  username: '',
  password: '',
  token: tokenStorage !== null ? tokenStorage : '',
  errorMsg: '',
  // isAdmin: isAdmin !== null ? JSON.parse(isAdmin) : false,
  isAdmin: isAdmin !== null ? !!isAdmin : false,
};

export const userReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case ActionType.updateUserSuccess:
      const { username, password, token } = action.payload;

      return {
        username,
        password,
        token,
        errorMsg: '',
        isAdmin:
          username === constants.adminUsername &&
          password === constants.adminPassword,
      };

    case ActionType.updateUserFailure:
      return {
        ...state,
        errorMsg: action.payload,
      };

    case ActionType.fetchUserFailure:
      console.log('API FAILED');

      return state;

    default:
      return state;
  }
};

export default userReducer;
