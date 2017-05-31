import React from 'react'
import { Link } from 'react-router-dom'

const Preview = (props) => {
  function handleDelete(){
    props.onDelete(props.meme.id)
  }

  return (
    <div>
      <h1>PREVIEW</h1>
      <div className='meme-container'>
        <div className='wrapper'>
          <img className='preview-image' alt="" src={props.uploadedFileCloudinaryUrl} />
          <div className='display-text-center'>
            <div id='text_top'> {props.text_top} </div>
            <div id='text_bottom'> {props.text_bottom} </div>
          </div>
        </div>
        <Link to='/memes'><button>Publish Meme</button></Link>
        <Link to={`/memes/${props.meme.id}/edit`}><button>Edit Meme</button></Link>
        <button onClick={handleDelete}>Delete Meme</button>
      </div>
    </div>
  )
}

export default Preview
