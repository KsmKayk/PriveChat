import React from 'react';
import './styles.scss';

import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';

function Home() {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default Home;