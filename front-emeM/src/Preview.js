import React from 'react'
import { Link } from 'react-router-dom'

const Preview = (props) => {
  function handleDelete(){
    props.onDelete(props.meme.id)
  }
  console.log(props)

  return (
    <div>
      <h1>PREVIEW</h1>
      <div className="wrapper">
        <img className="preview-image" alt="" src={props.meme.image_url} />
        <div className="display-text-center">
          <div id="display-text-top">{props.meme.text_top.toUpperCase()}</div>
          <div id="display-text-bottom">{props.meme.text_bottom.toUpperCase()}</div>
        </div>
      </div>
      <Link to='/memes'><button>Publish Meme</button></Link>
      <Link to={`/memes/${props.meme.id}/edit`}><button>Edit Meme</button></Link>
      <button onClick={handleDelete}>Delete Meme</button>
    </div>
  )
}

export default Preview
