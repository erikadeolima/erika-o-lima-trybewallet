// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const USER_WALLET = 'USER_WALLET';
export const CURRENCIES_REQUEST = 'CURRENCIES_REQUEST';
export const CURRENCIES_REQUEST_SUCESS = 'CURRENCIES_REQUEST_SUCESS';
export const CURRENCIES_REQUEST_FAILURE = 'CURRENCIES_REQUEST_FAILURE';

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

export const currenciesRequestFailure = (errorMsg) => ({
  type: CURRENCIES_REQUEST_FAILURE,
  payload: errorMsg,
});

export function fetchCurrencies() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return fetch(URL)
    .then((response) => {
      const currencies = response.data;
      dispatch(currenciesRequestSucess(currencies));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(currenciesRequestFailure(errorMsg));
    });
}

export const userWallet = (payload) => ({
  type: USER_WALLET,
  payload,
});
