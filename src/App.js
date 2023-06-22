
import './App.css';
import Home from './pages/Homepage';
import {BrowserRouter, Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Product from './pages/products';
import Login from './pages/login';
function App() {
  return (
    <BrowserRouter>

<Switch>
  <Route  path ="/Login"  component={Login}/>
  <Route path="/Products"  component ={Product}/>
  <Route path="/"  component={Home}   />
</Switch>

    </BrowserRouter>
  );
}

export default App;
