import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatchFetchCurrencies } = this.props;
    await dispatchFetchCurrencies();
  }

  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <ExpensesForm />
        <ExpensesTable />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatchFetchCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCurrencies: () => dispatch(fetchCurrencies()),
});
export default connect(null, mapDispatchToProps)(Wallet);
