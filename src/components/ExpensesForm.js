import React from 'react';
import PropTypes from 'prop-types';
/* import Combobox from 'react-widgets/Combobox'; */
import { connect } from 'react-redux';

class ExpensesForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <header>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              name="value"
              type="text"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              name="description"
              type="text"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="currencies">
            Moeda:
            <select
              id="currencies"
              data-testid="currencies-select"
            >
              {currencies.map((currencie) => (
                <option
                  key={ currencie }
                  value={ currencie }
                >
                  {currencie}
                </option>))}
            </select>
          </label>

          <label htmlFor="method">
            Metódo:
            <select
              id="method"
              name="method"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              id="tag"
              type="dropdown"
              name="tag"
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </header>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(ExpensesForm);
