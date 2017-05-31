import React from 'react'
import { Link } from 'react-router-dom'

const Preview = (props) => {
  console.log('this is from preview', props)
  return (
    <div className='meme-container'>
      <img className='preview-image' alt="" src={props.uploadedFileCloudinaryUrl} />
      <div id='text_top'> {props.text_top} </div>
      <div id='text_bottom'> {props.text_bottom} </div>

      <div>
        <h1>PREVIEW</h1>
        <Link to={`/memes/${props.meme.id}/edit`}><button>Edit Meme</button></Link>
        {/* need to define route somewhere for /memes/:id/edit */}
        <Link to='/memes'><button>Publish Meme</button></Link>
      </div>
    </div>
  )
}

export default Preview
