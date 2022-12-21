import React from 'react';
import './styles.scss';
import addAvatar from '../../img/addAvatar.png'

function Register() {
  return (
    <div className='registerFormContainer'>
      <div className="registerFormWrapper">
        <span className="logo">Prive Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input type="file" id='file' style={{display:"none"}}/>
          <label htmlFor="file">
            <img src={addAvatar} alt="avatarImage" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>

        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;