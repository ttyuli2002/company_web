import React from 'react'; // Import React
import './CSS/App.css';
import NavBar from './Navbar';
import All_Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <All_Routes/>
      </Router>
    </div>
  );
}

export default App;

