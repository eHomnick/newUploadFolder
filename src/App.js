import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Login from './components/clients/Login/Login'
import Buttons from './components/clients/Appointments/Options';
import Aaa from './components/clients/cancellation/cancellation'
import Changing from './components/clients/Changing queues/Changingqueues';
import Myqueues from './components/clients/Myqueues/Myqueues';
import About from './components/clients/About/About';
import Shop from './components/clients/Shop/Shop';
import NavbarClient  from './components/clients/navbar/navbar';
import Hairsylist from './components/clients/cooperate/cooperate'
import Spreyhair from './components/clients/Shop/Spreyhair/Spreyhair'
import Spreyface from './components/clients/Shop/Spreyface/Spreyface';
import Fen from './components/clients/Shop/Fen/Fen'
import {Outlet} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';



//לבחור צבעים
//לוגו
//תמונות לאתר

function App() {
 

  return (
    // <Provider store={store}>
    <div className="App">
   

      {/* <Login></Login>  */}
      {/* <Buttons></Buttons> */}
      {/* <Aaa></Aaa> */}
      {/* <Changing></Changing> */}
      {/* <Myqueues></Myqueues> */}
      {/* <About></About> */}
      {/* <Shop></Shop> */}

      <NavbarClient></NavbarClient>
      <Outlet />

    </div>
    // </Provider>
  );
}

export default App;
