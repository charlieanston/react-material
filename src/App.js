import React from 'react';
import logo from './logo.svg';
import './App.css';
import TemporaryDrawer from './Components/Sidenav/index'
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemporaryDrawer></TemporaryDrawer>
        <Button variant="contained" color="primary">
          Test
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
