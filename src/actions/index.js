// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const USER_WALLET = 'USER_WALLET';
export const CURRENCIES_REQUEST = 'CURRENCIES_REQUEST';
export const CURRENCIES_REQUEST_SUCESS = 'CURRENCIES_REQUEST_SUCESS';
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SET_EDIT = 'SET_EDIT';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const currenciesRequest = () => ({
  type: CURRENCIES_REQUEST,
});

export const currenciesRequestSucess = (currencies) => ({
  type: CURRENCIES_REQUEST_SUCESS,
  payload: currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const resp = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await resp.json();
    const arr = Object.keys(data);
    const currencies = arr.filter((key) => key !== 'USDT');
    dispatch(currenciesRequestSucess(currencies));
  };
}

export const userWallet = (payload) => ({
  type: USER_WALLET,
  payload,
});

export const updateValue = () => ({ type: UPDATE_VALUE });

export const deleteExpensesAction = (id) => ({
  type: DELETE_EXPENSES,
  payload: id,
});

export const setIdToEditAction = (id) => ({
  type: SET_EDIT,
  payload: id,
});

export const editExpense = (id, expense) => ({
  type: EDIT_EXPENSE,
  payload: {
    ...id,
    ...expense,
  },
});
