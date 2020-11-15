import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';
import Navbar from './components/Navbar/navbar';
import HomePage from './pages/HomePage/HomePage';

axios.defaults.baseURL = 'http://localhost:50000';

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Route exact path='/' component={HomePage}/>
        </Router>
      </div>
    );
  }
}

export default App;
