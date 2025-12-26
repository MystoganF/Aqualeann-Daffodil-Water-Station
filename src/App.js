import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Order from './pages/Order'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/order-packages' element={<Order/>}/>
      </Routes>
    </div>
  
    
  );
}

export default App;
