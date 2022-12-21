import React from 'react';

import './styles.scss';

function Navbar() {
  return <div className='navbar'>
    <span className='logo'>Prive Chat</span>
    <div className="user">
      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
      <span>Jane Doe</span>
      <button>logout</button>
    </div>
  </div>;
}

export default Navbar;