import React from 'react';
import './styles.scss';

function Login() {
  return (
    <div className='loginFormContainer'>
      <div className="loginFormWrapper">
        <span className="logo">Prive Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <button>Sign in</button>
        </form>

        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;