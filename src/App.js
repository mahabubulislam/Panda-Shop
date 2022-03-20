import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menubar/Menu';
import Search from './Components/Search/Search';
import Products from './Components/Products/Products';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0)
  const displayCount = () => setCount(count+1)
  return (
    <div className="App container">
      <Menu count={count}></Menu>
      <Search></Search>
      <Products setCount={displayCount} ></Products>
    </div>
  );
}

export default App;
