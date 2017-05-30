import React from 'react'
import UploadForm from '../UploadForm'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'


class MemesContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      memes: []
    }
  }

  handleAddMeme(meme){
    axios.post('http://localhost:3000/api/v1/memes', {
      image_url: meme.image_url,
      text_top: meme.text_top,
      text_bottom: meme.text_bottom
    })
    .then(res => {
      this.setState( prevState => ({ memes: [...prevState.memes, meme] }))
    })
    // this.props.history.push('/preview')
  }

  render(){
    console.log("MemesContainer state", this.state)
    return(
      <UploadForm onSubmit={this.handleAddMeme.bind(this)} />
    )
  }

}

export default MemesContainer
