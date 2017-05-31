import React from 'react'
import { Modal, Image } from 'semantic-ui-react'

const DisplayAllMemesInRow = (props) => {
  const reverseOrder = props.memes.slice(0).reverse()
  let eachMeme = reverseOrder.map( (em, i) => {
    return(
      <div className="wrapper" key={i}>
        <Modal trigger={<div><img className="image-tile" src={em.image_url} alt="" />
        <div className="display-text-center">
          <div id="display-text-top">{em.text_top.toUpperCase()}</div>
          <div id="display-text-bottom">{em.text_bottom.toUpperCase()}</div>
        </div></div>}>

          <div><Modal.Content>
            <div><img className="image-tile" src={em.image_url} alt="" />
            <div className="display-text-center">
              <div id="display-text-top">{em.text_top.toUpperCase()}</div>
              <div id="display-text-bottom">{em.text_bottom.toUpperCase()}</div>
            </div></div>
          </Modal.Content></div>
        </Modal>
      </div>
    )
  })
  return(
    <div> {eachMeme} </div>
  )
}

export default DisplayAllMemesInRow
