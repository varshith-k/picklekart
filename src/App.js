// import logo from './logo.svg';
// import { Home } from '@mui/icons-material';
import './App.css';
import Header from './Header';
import Home from './Home';
// import Product from './Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    //BEM Convention
    <BrowserRouter>
    <div className="app">
    <Header/>
      <Routes>
      <Route path='/' element={<><Home/></>} />
          {/* <Header/> */}
          {/* <Home/> */}
      <Route path='/checkout' element={<><Checkout/></>}/>
          {/* <Header/> */}
        {/* </Route> */}
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
