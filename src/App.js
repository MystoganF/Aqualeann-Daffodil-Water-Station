import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Order from './pages/Order'; 
import Transaction from './pages/Transaction';


function App() {
  return (
   
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/order-packages' element={<Order/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
        </Routes>

  );
}

export default App;
