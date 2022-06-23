import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  state = {
    expenses: 0,
  }

  render() {
    const { email/* , expenses */ } = this.props;
    const { expenses } = this.state;
    return (
      <header>
        <div>
          Olá, Seja Bem-Vindo(a)
        </div>
        <div>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">
            Gasto Total:
            {expenses}
            {/* expenses.reduce((acc, curr) => {
              acc += (curr.exchangeRates[curr.currency].ask * curr.value);
              return acc;
            }, 0).toFixed([2]) */}
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
  /* expenses: PropTypes.arrayOf.isRequired, */
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  /* expenses: state.wallet.expenses, */
});

export default connect(mapStateToProps, null)(Header);
