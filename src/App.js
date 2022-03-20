import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menubar/Menu';
import Search from './Components/Search/Search';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Search></Search>
      <Products></Products>
    </div>
  );
}

export default App;
