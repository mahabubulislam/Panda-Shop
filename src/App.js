import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menubar/Menu';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
    </div>
  );
}

export default App;
