import React, { Component } from 'react'
import NavBar from './NavBar'
import MemesContainer from './containers/MemesContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <NavBar />
        <MemesContainer />
        <Switch>
          <Route exact path='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
