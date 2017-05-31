import React from 'react'
import { Grid } from 'semantic-ui-react'
import DisplayAllMemesInRow from './DisplayAllMemesInRow'

const DisplayAllMemesinTable = (props) => {
  console.log('displayallmemesintable', props)

  return(
    <div className="column padding-reset">
      <Grid container columns={4} centered>
        <Grid.Row container verticalAlign='middle'><br/><h1>Welcome to emeM</h1></Grid.Row>
        <DisplayAllMemesInRow memes={props.memes}/>
      </Grid>
    </div>
  )
}

export default DisplayAllMemesinTable
