import React from 'react'
import DisplayAllMemesInRow from './DisplayAllMemesInRow'

const DisplayAllMemesinTable = (props) => {
  console.log('displayallmemesintable', props)
  
  return(
    <div>
      <DisplayAllMemesInRow memes={props.memes}/>
    </div>

  )
}

export default DisplayAllMemesinTable
