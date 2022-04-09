// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";




import Login from './login';
import SignUp from './sign_up';


function App() {
  return (
    
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

       /* <Login></Login>
      <Footer></Footer>   */
      
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>
      </Router> 


    
  );
}

export default App;
