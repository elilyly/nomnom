import React, { Component } from 'react'
import NavBar from './NavBar'
import DisplayAllMemesContainer from './containers/DisplayAllMemesContainer'
import MemesContainer from './containers/MemesContainer'
import { Switch, Route } from 'react-router-dom'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route path='/memes' component={MemesContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
