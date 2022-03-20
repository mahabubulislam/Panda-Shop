import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menubar/Menu';
import { useState } from 'react';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Search></Search>
    </div>
  );
}

export default App;
