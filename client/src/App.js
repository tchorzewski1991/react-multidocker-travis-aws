import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/other">Other</Link>
        </header>
      </div>
      <div>
          <Route exact path="/" component={Fib} />
          <Route path="/other"  component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
