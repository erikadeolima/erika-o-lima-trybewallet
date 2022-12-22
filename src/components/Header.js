import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalExpenses = () => {
    const { expenses } = this.props;

    const total = expenses.reduce((acc, expense) => {
      const convertedValue = expense.value * expense.exchangeRates[expense.currency].ask;

      const sum = acc + convertedValue;

      return sum;
    }, 0);

    return (Math.floor(total * 100) / 100).toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <div>
          Olá, Seja Bem-Vindo(a)
        </div>
        <div>
          <div data-testid="email-field">{email}</div>
          <span>Gasto Total:</span>
          <div data-testid="total-field">
            {expenses.length === 0 ? 0.00 : this.totalExpenses()}
          </div>
          <div data-testid="header-currency-field">BRL</div>
          <div />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  })).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalValueExpenses: state.wallet.totalValueExpenses,
});

export default connect(mapStateToProps, null)(Header);
