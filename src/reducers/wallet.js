// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_REQUEST,
  CURRENCIES_REQUEST_SUCESS,
  USER_WALLET, UPDATE_VALUE, DELETE_EXPENSES, SET_EDIT, EDIT_EXPENSE } from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  totalValueExpenses: 0,
  editWallet: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function walletReducer(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case CURRENCIES_REQUEST:
    return {
      ...state,
    };
  case CURRENCIES_REQUEST_SUCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case USER_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case UPDATE_VALUE:
    return {
      ...state,
      totalValueExpenses: [state.expenses.reduce(
        (acc, { value, currency, exchangeRates }) => (
          acc + Number(value) * exchangeRates[currency].ask
        ), 0,
      ).toFixed(2),
      action.payload],
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case SET_EDIT:
    return {
      ...state,
      editWallet: true,
      idToEdit: action.payload,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => (expense.id !== action.payload.id
        ? expense
        : { ...expense, ...action.payload })),
      editWallet: false,
      idToEdit: 0,
    };
  default:
    return state;
  }
}

export default walletReducer;
