import React from 'react'

const DisplayAllMemesInRow = (props) => {
  console.log('displayallmemes<3', props) //array of 30 objs
  let eachMeme = props.memes.map( (em, i) => {
    return(
      <div className="wrapper" key={i}>
        <img className="image-tile" src={em.image_url} alt="" />
        <div className="display-text-center">
          <div id="display-text-top">{em.text_top}</div>
          <div id="display-text-bottom">{em.text_bottom}</div>
        </div>
      </div>
    )
  })

  // var arr = [];
  // for(var i = 0; i < props.memes.length; i++) {
  //   for(var j = 0; j < props.memes[i].length) {
  //     console.log("what the")
  //   }
  //   // console.log(props.memes[i].image_url);
  // }

  // for (var i = 0; i < props.memes.length; i++) {
  //   console.log(props.memes[i].image_url)
  // }

  return(
    <div>{eachMeme}</div>
  )
}

export default DisplayAllMemesInRow
