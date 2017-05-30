import React from 'react'


const Preview = (props) => {
  return (
    <div className='meme-container'>
      <img className='image' src={props.uploadedFileCloudinaryUrl} />
      <div id='text_top'> {props.text_top}</div>
    </div>
  )
}
export default Preview
