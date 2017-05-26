import React from 'react'

class UploadForm extends React.Component {
  constructor() {
    super()


    this.state = {
      uploadInput: '',
      description: ''
    }
  }

  handleInputChange(event) {
    this.setState({
      uploadInput: event.target.value
    })
  }


  render() {
    return(
      <div className="ui page grid main">
        <div  className="row">
          <form>
            <h1>Upload Image</h1>
            <input type='text' value={this.state.uploadInput}/>
          </form>
        </div>
      </div>
    )
  }
}

export default UploadForm
