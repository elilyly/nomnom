import React, { Component } from 'react'
import DisplayAllMemesInTable from '../DisplayAllMemesInTable'
import axios from 'axios'
import { Grid } from 'semantic-ui-react'


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
      <div className="column padding-reset">
        <Grid container columns={4} centered>
          <Grid.Row container verticalAlign='middle'><br/><h1>Welcome to emeM</h1></Grid.Row>
          <DisplayAllMemesInTable memes={this.state.memes}/>
        </Grid>
      </div>
    )
  }
}

export default DisplayAllMemesContainer
