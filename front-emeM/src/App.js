import React, { Component } from 'react'
// import NavBar from './NavBar'
import NewMenu from './shared/NewMenu'
import DisplayAllMemesContainer from './containers/DisplayAllMemesContainer'
import MemesContainer from './containers/MemesContainer'
import { Switch, Route } from 'react-router-dom'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <NewMenu />
        <Switch>
          <Route exact path='/memes' component={DisplayAllMemesContainer}/>
          <Route path='/memes/new' component={MemesContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
