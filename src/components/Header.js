import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses, totalValueExpenses } = this.props;
    return (
      <header>
        <div>
          Olá, Seja Bem-Vindo(a)
        </div>
        <div>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">
            Gasto Total:
            {/* expenses */}
            { /* !expenses ? 0 : expenses.reduce((acc, exp) => {
              acc += (exp.exchangeRates[exp.currency].ask * exp.value);
              return acc;
            }, 0).toFixed([2]) */}
            {expenses.length === 0 ? 0 : totalValueExpenses}
          </div>
          <div data-testid="header-currency-field">BRL</div>
          <div />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
  totalValueExpenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalValueExpenses: state.wallet.totalValueExpenses,
});

export default connect(mapStateToProps, null)(Header);
