import React from 'react';

import './styles.scss';

function Chats() {
  return <div className='chats'>
    <div className="userChats">
      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
      <div className="userChatsInfo">
        <span>Jane</span>
        <p>Hello</p>
      </div>
    </div>
    <div className="userChats">
      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
      <div className="userChatsInfo">
        <span>Jane</span>
        <p>Hello</p>
      </div>
    </div>
    <div className="userChats">
      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
      <div className="userChatsInfo">
        <span>Jane</span>
        <p>Hello</p>
      </div>
    </div>
  </div>;
}

export default Chats;