// import logo from './logo.svg';
// import { Home } from '@mui/icons-material';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';

// import Product from './Product';
//Listener to see who is logged in
import { useEffect } from 'react';
import { auth } from './firebase';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';






function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  // like an if statement in react
  useEffect(() => {
        //will only run once when app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('The USER is >>', authUser);
      if(authUser){//if user logged in or already in logged in mode
             dispatch({
               type: 'SET_USER',
               user: authUser
             })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    });
      //eslint-disable-next-line
  }, [ ])
  
  return (
    //BEM Convention
    <BrowserRouter>
    <div className="app">
      <Routes>
       <Route path='/' element={<>    
        <Header/>
        <Home/></>
       } />
          
       <Route path='/login' element={<>
        <Login/></>
       } />

       <Route path='/checkout' element={<>    
        <Header/>
        <Checkout/></>
      }/>
      <Route path='/payment' element={<>    
       <Header/>
       <Payment/>
         </>
     }/>
    
      </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
