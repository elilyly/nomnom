import React, { Component } from 'react'
import NavBar from './NavBar'
import MemesContainer from './MemesContainer'
import UploadForm from './UploadForm'
import DisplayUploadedPic from './DisplayUploadedPic'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <NavBar />
        {/* <UploadForm /> */}
        <MemesContainer />
        <DisplayUploadedPic />
        <Switch>
          <Route path='/preview'/>
        </Switch>
      </div>
    );
  }
}

export default App;
