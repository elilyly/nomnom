import React from 'react'

import UploadForm from '../UploadForm'

class MemesContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      memes: []
    }
  }

  handleAddMeme(meme){
    this.setState( prevState => ({ memes: [...prevState.memes, meme] }) )
  }

  render(){
    console.log("MemesContainer state", this.state)
    return(
      <UploadForm onSubmit={this.handleAddMeme.bind(this)} />
    )
  }

}

export default MemesContainer
