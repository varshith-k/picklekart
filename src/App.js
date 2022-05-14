// import logo from './logo.svg';
// import { Home } from '@mui/icons-material';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    //BEM Convention
    <div className="app">
     <Header/>
     <Home/>
     {/* Home */}
    </div>
  );
}

export default App;
