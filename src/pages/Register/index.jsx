import React, {useState} from 'react';
import './styles.scss';

import addAvatar from '../../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {doc, setDoc} from 'firebase/firestore';
import { auth, storage, db } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res)
      
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {})
            navigate('/')
          } catch (error) {
            setErr(true)
          }
        })
      })
    }     
     catch (error) {
      setErr(true);
    }

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
          {err && <span className="err">Something went wrong</span>}
        </form>
        <p>You do have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;