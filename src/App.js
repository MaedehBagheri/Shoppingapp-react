
import Home from './pages/Homepage';
import {BrowserRouter, Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Product from './pages/products';
import Login from './pages/login';
import CartProvider from './Providers/CartProvider';
import Cart from './pages/cartShopping';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>

<CartProvider >
  <ToastContainer />
<Switch>
  <Route path="/cart" component={Cart}/>
  <Route  path ="/Login"  component={Login}/>
  <Route path="/Products"  component ={Product}/>
  <Route path="/"  component={Home}   />
</Switch>
</CartProvider>

    </BrowserRouter>
  );
}

export default App;
