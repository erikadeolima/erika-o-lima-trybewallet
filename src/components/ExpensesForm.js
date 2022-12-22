import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userWallet, updateValue, editExpense } from '../actions';

const expense = {
  value: '',
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
  /* id: 1, */
};

class ExpensesForm extends React.Component {
  state = { ...expense };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClickAdd = async () => {
    const {
      saveExpenses,
      expenses,
    } = this.props;
    const conversion = await fetch(
      'https://economia.awesomeapi.com.br/json/all',
    ).then((response) => response.json());

    saveExpenses({
      ...this.state,
      id: !expenses.length ? 0 : expenses.length,
      exchangeRates: conversion,
    });
    this.setState({ ...expense });
  };

  handleClickEdit = async (expenseEdited) => {
    const {
      editExpenses,
    } = this.props;
    editExpenses(expenseEdited);
    this.setState((prevState) => ({
      ...expense,
      id: prevState.id,
    }));
  };

  render() {
    const { currencies, editWallet, idToEdit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expenseAlreadyEdited = {
      id: idToEdit,
      value,
      description,
      currency,
      method,
      tag,
    };
    return (
      <header>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              id="value"
              name="value"
              type="text"
              data-testid="value-input"
              value={ value }
              onChange={ this.onInputChange }
            />
          </label>
          {' '}
          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              name="description"
              type="text"
              data-testid="description-input"
              value={ description }
              onChange={ this.onInputChange }
            />
          </label>
          {' '}
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              data-testid="currencies-select"
              value={ currency }
              onChange={ this.onInputChange }
            >
              {/* <option>Selecione uma Moeda</option> */}
              {currencies.map((curr) => (
                <option key={ curr } value={ curr }>
                  {curr}
                </option>
              ))}
            </select>
          </label>
          {' '}
          <label htmlFor="method">
            Metódo:
            <select
              id="method"
              name="method"
              data-testid="method-input"
              value={ method }
              onChange={ this.onInputChange }
            >
              <option>Selecione um método de Pagamento</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          {' '}
          <label htmlFor="tag">
            Categoria:
            <select
              id="tag"
              name="tag"
              type="dropdown"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.onInputChange }
            >
              <option>Selecione uma categoria</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            {' '}
          </label>
          {!editWallet ? (
            <button type="button" onClick={ this.handleClickAdd }>
              Adicionar despesa
            </button>
          ) : (
            <button
              type="button"
              onClick={
                () => this.handleClickEdit(expenseAlreadyEdited)
              }
            >
              Editar despesa
            </button>
          ) }
        </form>
      </header>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  saveExpenses: PropTypes.func.isRequired,
  editExpenses: PropTypes.func.isRequired,
  editWallet: PropTypes.bool,
  idToEdit: PropTypes.number,
  /* walletId: PropTypes.number.isRequired, */
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editWallet: state.wallet.editWallet,
});
const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (expenses) => {
    dispatch(userWallet(expenses));
  },
  updateExpenses: () => dispatch(updateValue()),
  editExpenses: (expenseEdited) => dispatch(editExpense(expenseEdited)),
});

ExpensesForm.defaultProps = {
  editWallet: false,
  idToEdit: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
