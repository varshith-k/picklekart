// import logo from './logo.svg';
// import { Home } from '@mui/icons-material';
import './App.css';
import Header from './Header';
import Home from './Home';
// import Product from './Product';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    //BEM Convention
    <Router>
    <div className="app">
      <Routes>
        <Route path=''>
          <Header/>
          <Home/>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
