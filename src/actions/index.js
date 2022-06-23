// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const USER_WALLET = 'USER_WALLET';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const userWallet = (payload) => ({
  type: USER_WALLET,
  payload,
});
