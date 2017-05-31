import React, { Component } from 'react'
import NavBar from './NavBar'
import MemesContainer from './containers/MemesContainer'
import DisplayAllMemesContainer from './containers/DisplayAllMemesContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <NavBar />
        <MemesContainer />
        <DisplayAllMemesContainer />
        <Switch>
          <Route exact path='/memes' />
          <Route path='/memes/new' />
        </Switch>
      </div>
    );
  }
}

export default App;
