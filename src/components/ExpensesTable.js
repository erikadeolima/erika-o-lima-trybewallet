import React from 'react';
/* import PropTypes from 'prop-types'; */
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  render() {
    /* const { expenses } = this.props; */
    return (
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
    );
  }
}

/* ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
}; */

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps, null)(ExpensesTable);
