import React, { Component } from 'react';
import NavBar from './NavBar';
import UploadForm from './UploadForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui grid">
        <NavBar />
        <UploadForm />
      </div>
    );
  }
}

export default App;
