import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home";
import Bio from "./pages/bio";
import Contact from "./pages/contact";
import Films from "./pages/films";
import KennedyJosh from "./films/kennedy_josh";
import HannahJosh from "./films/hannah_josh";
import HermanaOhlsen from "./films/hermana_ohlsen";
import Footer from "./footer/footer";
import NavigationContainer from "./nav-bar/nav-bar";


export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <Router>
          <div className="wrapper">
          <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bio" component={Bio} />
              <Route path="/films" component={Films} />
              <Route path="/contact" component={Contact} />
              <Route path="/films/:slug" component={KennedyJosh} />
              <Route path="/films/:slug" component={HannahJosh} />
              <Route path="/films/:slug" component={HermanaOhlsen} />

            </Switch>
            <Footer />

          </div>
          
        </Router>
       
      </div>
    );
  }
}
