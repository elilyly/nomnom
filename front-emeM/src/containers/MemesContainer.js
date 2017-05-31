import React from 'react'
import DisplayAllMemesInTable from '../DisplayAllMemesInTable'
import UploadForm from '../UploadForm'
import Preview from '../Preview'
import { Route, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'


class MemesContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      memes: [],
      redirect: false
    }
  }

  componentDidMount(){
    const URL = 'http://localhost:3000/api/v1/memes'
    axios.get(URL)
      .then(res => { this.setState({ memes: res.data }) })
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

  handleDeleteMeme(id){
    console.log("ID: ", id);
    axios.delete(`http://localhost:3000/api/v1/memes/${id}`)
    .then(res => {
      const updatedMemes = this.state.memes.filter(meme => meme.id !== id)
      this.setState({memes: updatedMemes})
      alert("Meme sucessfully deleted!")
      this.props.history.push('/memes')
    })
  }

  render(){
    let redirectToPreview = this.state.redirect ? <Redirect to ='/memes/preview' /> : null

    return(
      <div>
        <Switch>
          <Route
            exact path='/memes'
            render={() => <DisplayAllMemesInTable memes={this.state.memes}/>}
          />
          <Route
            path='/memes/new'
            render={() => <UploadForm onSubmit={this.handleAddMeme.bind(this)} />}
          />
          <Route
            path='/memes/preview'
            render={ () => <Preview meme={this.state.memes.slice(-1)[0]} onDelete={this.handleDeleteMeme.bind(this)} /> }
          />
        </Switch>
        {redirectToPreview}
      </div>
    )
  }
}

export default MemesContainer
