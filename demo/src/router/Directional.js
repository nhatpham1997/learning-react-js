import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './../component/Home';
import Services from './../component/Services';
import Portfolio from './../component/Portfolio';
import About from './../component/About';
import Team from './../component/Team';
import Contact from './../component/Contact';

class Directional extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/services" component={Services}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/team" component={Team}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
        );
    }
}
export default Directional;