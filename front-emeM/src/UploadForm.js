import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import request from 'superagent'
// import Preview from './Preview'

const CLOUDINARY_UPLOAD_PRESET = 'dmtif1gy';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hellosylvee/image/upload'

class UploadForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      uploadedFileCloudinaryUrl: '',
      text_top: '',
      text_bottom: ''
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
      }
    })
  }

  handleInputChangeTop(e){
    this.setState({
      text_top: e.target.value
    })
  }

  handleInputChangeBottom(e){
    this.setState({
      text_bottom: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const meme={
      image_url: this.state.uploadedFileCloudinaryUrl,
      text_top: this.state.text_top,
      text_bottom: this.state.text_bottom
    }
    this.props.onSubmit(meme)
  }

  render() {
    let showImage = <img alt="" src={this.state.uploadedFileCloudinaryUrl} />
    // console.log('this is the state', this.state)
    return(
      <div className="ui page grid main">
        <div className="row">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <label>Add top text</label>
            <input type="text" onChange={this.handleInputChangeTop.bind(this)}/><br/>
            <label>Add bottom text</label>
            <input type="text" onChange={this.handleInputChangeBottom.bind(this)}/><br/>
            <input type="submit" value="Preview Meme" />

          </form>
          <div>
            { this.state.uploadedFileCloudinaryUrl === '' ? null : showImage }
          </div>
        </div>
      </div>
    )
  }
}

export default UploadForm
