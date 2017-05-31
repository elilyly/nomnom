import React from 'react'
import DisplayAllMemesInRow from './DisplayAllMemesInRow'

const DisplayAllMemesinTable = (props) => {
  // let row = []
  // for (var i = 0; i < props.memes.length; i++) {
  //   if(i % 4 === 0) { console.log(row.push(props.memes)) }
  // }

  return(
    <div>
      <DisplayAllMemesInRow memes={props.memes}/>
    </div>

  )
}

export default DisplayAllMemesinTable
