import React from 'react';
import Player from './components/Player.component';
import Navbar from './components/Navbar.component';

import './App.css';

function App() {
  return (
    <div data-testid="App" className="App">
    <Navbar />
      <header className="App-header">
        <Player />
      </header>
    </div>
  );
}

export default App;
