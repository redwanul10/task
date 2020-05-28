import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import Orders from './pages/orders';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Navbar from './component/navBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/orders" component={Orders}/>
      </Switch>
    </Router>
  );
}

export default App;
