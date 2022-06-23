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
  /* .then((response) => {
    const currencies = response.data;
    console.log(data);
    dispatch(currenciesRequestSucess(currencies));
  })
  .catch((error) => {
    const errorMsg = error.message;
    dispatch(currenciesRequestFailure(errorMsg));
  }); */
  return async (dispatch) => {
    const resp = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await resp.json();
    const currencies = data.filter((key) => key !== 'USDT');
    dispatch(currenciesRequestSucess(currencies));
  };
}

export const userWallet = (payload) => ({
  type: USER_WALLET,
  payload,
});
