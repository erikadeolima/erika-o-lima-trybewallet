// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const USER_WALLET = 'USER_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export function fetchAPI() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    return dispatch(requestApiSuccess(data));
  };
}

export const expenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const userWallet = (payload) => ({
  type: USER_WALLET,
  payload,
});
