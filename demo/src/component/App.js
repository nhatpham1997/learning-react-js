import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Directional from './../router/Directional';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header></Header>
          <Directional></Directional>
        <Footer></Footer>
        </Router> 
      </div>
    );
  }
}

export default App;
