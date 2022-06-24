// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_REQUEST,
  CURRENCIES_REQUEST_SUCESS,
  /* CURRENCIES_REQUEST_FAILURE, */
  USER_WALLET } from '../actions';

const initialState = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function walletReducer(state = initialState, action) {
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
    /*   case CURRENCIES_REQUEST_FAILURE:
    return {
      ...state,
      currencies: [],
      error: action.payload,
    }; */
  case USER_WALLET:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  default:
    return state;
  }
}

export default walletReducer;
