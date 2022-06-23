import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  validatePassword = () => {
    const { password } = this.state;
    const passwordValidate = password.length >= '6';
    return passwordValidate;
  };

  validateEmail = () => {
    const { email } = this.state;
    const emailValidate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailValidate.test(email);
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  loginButton = () => {
    const { history, saveLogin } = this.props;
    const { email } = this.state;
    saveLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="password">
            email:
            <input
              type="text"
              data-testid="email-input"
              name="email"
              defaultValue={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              defaultValue={ password }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ !(this.validateEmail() && this.validatePassword()) }
            onClick={ this.loginButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => { dispatch(userLogin(email)); },
});

export default connect(null, mapDispatchToProps)(Login);
