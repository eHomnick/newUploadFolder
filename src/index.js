import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import App from './App';
import Login from './components/clients/Login/Login'
import Buttons from './components/clients/Appointments/Options';
import Changing from './components/clients/Changing queues/Changingqueues';
import Myqueues from './components/clients/Myqueues/Myqueues';
import About from './components/clients/About/About';
import Shop from './components/clients/Shop/Shop';
import Cancellation from './components/clients/cancellation/cancellation'
import Appointments from './components/clients/Appointments/Options'
import Hairsylist from './components/clients/cooperate/cooperate'
import Spreyhair from './components/clients/Shop/Spreyhair/Spreyhair'
import Spreyface from './components/clients/Shop/Spreyface/Spreyface';
import Fen from './components/clients/Shop/Fen/Fen'
import Employee from './components/employees/Enter/enter'
import Colorhier from './components/clients/Appointments/Colorhier/Colorheir'
import ShoppingCart from './components/clients/Shop/Shoppingcart/Shoppingcart'

//
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} >
            <Route index element={<Login />}></Route>
            <Route path='/Buttons' element={<Buttons />}></Route>
            <Route path='/Appointments' element={<Appointments />}></Route>
            <Route path='/Changing' element={<Changing />}></Route>
            <Route path='/Myqueues' element={<Myqueues />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Shop' element={<Shop />}></Route>
            <Route path='/Cancellation' element={<Cancellation />}></Route>
            <Route path='/Hairsylist' element={<Hairsylist />}></Route>
            <Route path='/Spreyhair' element={<Spreyhair />}></Route>
            <Route path='/Spreyface' element={<Spreyface />}></Route>
            <Route path='/Fen' element={<Fen />}></Route>
            <Route path='/Employee' element={<Employee />}></Route>
            <Route path='/Colorhier' element={<Colorhier />}></Route>
            <Route path='/ShoppingCart' element={<ShoppingCart />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
