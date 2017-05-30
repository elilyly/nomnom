import React from 'react'


const Preview = (props) => {
  return (
    <div>
      <img className='image' src={props.uploadedFileCloudinaryUrl} />
      <p id='text_top'> {props.text_top}</p>
    </div>
  )
}
export default Preview
