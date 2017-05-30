import React from 'react'

const Preview = (props) => {
  console.log('this is preview', props)
  return (
    <div className='meme-container'>
      <img className='image' alt="" src={props.uploadedFileCloudinaryUrl} />
      <div id='text_top'> {props.text_top} </div>
      <div id='text_bottom'> {props.text_bottom} </div>
    </div>
  )
}
export default Preview
