import React from 'react';

import './styles.scss';

function Message() {
  return <div className="message owner">
    <div className="messageInfo">
      <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user img" />
      <span>just now</span>
    </div>
    <div className="messageContent">
      <p>hello</p>
      <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="sended img" />
    </div>
  </div>
}

export default Message;