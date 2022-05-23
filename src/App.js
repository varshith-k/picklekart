// import logo from './logo.svg';
// import { Home } from '@mui/icons-material';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
// import Product from './Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    //BEM Convention
    <BrowserRouter>
    <div className="app">
      <Routes>
      <Route path='/' element={<>    
      <Header/>
<Home/></>} />
          {/* <Header/> */}
          {/* <Home/> */}
      <Route path='/login' element={
      <>
      <Login/>
      </>
    } />

      <Route path='/checkout' element={<>    
      <Header/>
<Checkout/></>}/>
          {/* <Header/> */}
        {/* </Route> */}
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
