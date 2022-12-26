import React from 'react';
import './styles.scss';

import addAvatar from '../../img/addAvatar.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
  
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  

  return (
    <div className='registerFormContainer'>
      <div className="registerFormWrapper">
        <span className="logo">Prive Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
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