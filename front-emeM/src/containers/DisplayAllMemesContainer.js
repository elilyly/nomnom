import React, { Component } from 'react'
import DisplayAllMemesInTable from '../DisplayAllMemesInTable'
import axios from 'axios'

class DisplayAllMemesContainer extends Component {
  constructor(){
    super()
    this.state = {
      memes: []
    }
  }

  componentDidMount(){
    const URL = 'http://localhost:3000/api/v1/memes'
    axios.get(URL)
      .then(res => { this.setState({ memes: res.data }) })
  }

  render(){
    return(
      <table>
        <DisplayAllMemesInTable memes={this.state.memes}/>
      </table>
    )
  }
}

export default DisplayAllMemesContainer
