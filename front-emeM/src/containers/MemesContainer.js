import React from 'react'
import UploadForm from '../UploadForm'
import Preview from '../Preview'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'


class MemesContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      memes: [],
      redirect: false
    }
  }

  handleAddMeme(meme){
    axios.post('http://localhost:3000/api/v1/memes', {
      image_url: meme.image_url,
      text_top: meme.text_top,
      text_bottom: meme.text_bottom
    })
    .then(res => {
      this.setState( prevState => ({
        memes: [...prevState.memes, res.data],
        redirect: true
      }))
    })
  }


  render(){
    console.log("MemesContainer state", this.state)
    const redirect = this.state.redirect
    let redirectToPreview = this.state.redirect ? <Redirect to ='/preview' /> : null
    return(
      <div>
        <UploadForm onSubmit={this.handleAddMeme.bind(this)} />
        <Route
          path='/preview'
          render={ () => <Preview meme={this.state.memes.slice(-1)[0]} /> }
        />
        {redirectToPreview}
      </div>
    ) //return
  }
}

export default MemesContainer
