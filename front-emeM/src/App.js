import React, { Component } from 'react'
import NavBar from './NavBar'
import UploadForm from './UploadForm'
import DisplayUploadedPic from './DisplayUploadedPic'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <NavBar />
        <UploadForm />
        <DisplayUploadedPic />
      </div>
    );
  }
}

export default App;
