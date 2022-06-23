import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchFetchedApi } = this.props;
    dispatchFetchedApi();
  }

  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatchFetchedApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchedApi: () => dispatch(fetchAPI()),
});
export default connect(null, mapDispatchToProps)(Wallet);
