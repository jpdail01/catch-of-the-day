import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component{
  render(){
    return(
      <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button 
          className="github" 
          onClick={() => this.props.authenticate('Github')}
        >
          Log In with GitHub
        </button>
        <button 
          className="twitter" 
          onClick={() => this.props.authenticate('Twitter')}
        >
          Log In with Twitter
        </button>
        {/* <button 
          className="facebook" 
          onClick={() => this.props.authenticate('Facebook')}
        >
          Log In with FaceBook
        </button> */}
      </nav>
    );
  };
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;