import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  render() {
    const { expenses/* , currencies */ } = this.props;
    return (
      <div>
        <table>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </table>
        {expenses.length !== 0 ? (
          expenses.map((expense) => (
            <table key={ expense.id }>
              <td name={ expense.description }>{expense.description}</td>
              <td name={ expense.tag }>{expense.tag}</td>
              <td name={ expense.method }>{expense.method}</td>
              <td
                name={ parseFloat(expense.value).toFixed(2) }
              >
                {parseFloat(expense.value).toFixed(2)}

              </td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                {(expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
              </td>
              <td name="Real">Real</td>
              <td>Editar/Excluir</td>
            </table>
          ))
        ) : ''}
      </div>

    );
  }
}

ExpensesTable.propTypes = {
  /* currencies: PropTypes.arrayOf().isRequired, */
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps, null)(ExpensesTable);
