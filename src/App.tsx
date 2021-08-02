import React from 'react';

import './App.css';
import { PingTestContainer } from '@redux/pingpong/Ping-Test-Container';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <PingTestContainer />
      </header>
    </div>
  );
}

export default App;
