import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import UserService from '../../api/userServices';
import constants from '../../models/constants';

interface UserInterface {
  username: string;
  password: string;
  token: string;
  isAdmin: boolean;
}

export interface UpdateUserSuccessAction {
  type: ActionType.updateUserSuccess;
  payload: UserInterface;
}

export interface UpdateUserFailureAction {
  type: ActionType.updateUserFailure;
  payload: string;
}

export interface FetchUserFailureAction {
  type: ActionType.fetchUserFailure;
  payload: string;
}

export const updateUserSuccess = (
  user: UserInterface
): UpdateUserSuccessAction => {
  return {
    type: ActionType.updateUserSuccess,
    payload: user,
  };
};

export const updateUserFailure = (
  errorMsg: string
): UpdateUserFailureAction => {
  return {
    type: ActionType.updateUserFailure,
    payload: errorMsg,
  };
};

export const fetchUserFailure = (errorMsg: string): FetchUserFailureAction => {
  return {
    type: ActionType.fetchUserFailure,
    payload: errorMsg,
  };
};

export type UserActions =
  | UpdateUserSuccessAction
  | UpdateUserFailureAction
  | FetchUserFailureAction;

//this is an action creator - the thunk middleware can return a function instead of an action object
//the function it returns receives the dispatch method as its argument
export const updateUserInfo = (username: string, password: string) => {
  return (dispatch: Dispatch): void => {
    UserService.updateUser({ username, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem(
            'isAdmin',
            JSON.stringify(
              username === constants.adminUsername &&
                password === constants.adminPassword
            )
          );
          dispatch({
            type: ActionType.updateUserSuccess,
            payload: {
              username: username,
              password: password,
              token: res.data.token,
              isAdmin:
                username === constants.adminUsername &&
                password === constants.adminPassword,
            },
          });
        } else {
          dispatch({
            type: ActionType.updateUserFailure,
            payload: res.data.msg,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: ActionType.fetchUserFailure,
          payload: err,
        });
      });
  };
};
