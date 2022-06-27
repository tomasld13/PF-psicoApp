import React from 'react'

function FeaturesBox(props) {
  return (
    <div className='a-box'>
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="s-b-text">
        <h4 className="text-xl py-2.5"> {props.title} </h4>
      </div>
    </div>
  )
}

export default FeaturesBox