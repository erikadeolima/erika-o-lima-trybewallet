import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpensesAction, setIdToEditAction, updateValue } from '../actions';

class ExpensesTable extends React.Component {
  /* editExpenseButton = () => {}; */

  deleteExpenseButton = async (id) => {
    const {
      deleteExpense,
    } = this.props;
    deleteExpense(id);
    this.setState({ ...expense });
  };

  render() {
    const { expenses, deleteExpense, setWalletEdit } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(
              ({
                currency,
                description,
                exchangeRates,
                id,
                method,
                tag,
                value,
              }) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{parseFloat(value).toFixed(2)}</td>
                  <td>
                    {exchangeRates[currency].name.replace(
                      '/Real Brasileiro',
                    )}
                  </td>
                  <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>
                    {(
                      Math.floor(value * exchangeRates[currency].ask * 100)
                      / 100
                    ).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      onClick={ () => setWalletEdit(id) }
                    >
                      Editar
                    </button>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => deleteExpense(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>

    );
  }
}

ExpensesTable.propTypes = {
  /* currencies: PropTypes.arrayOf().isRequired, */
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  setWalletEdit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpensesAction(id)),
  updateExpenses: () => dispatch(updateValue()),
  setWalletEdit: (id) => dispatch(setIdToEditAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
