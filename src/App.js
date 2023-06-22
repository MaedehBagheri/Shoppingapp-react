
import './App.css';
import Home from './pages/Homepage';
import {BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
 <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
