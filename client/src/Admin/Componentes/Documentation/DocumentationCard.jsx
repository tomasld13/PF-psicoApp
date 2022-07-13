import React from 'react'

const DocumentationCard = (props) => {
  return (
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
    <div>
      <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
      <p>
        {props.text}
      </p>
    </div>
  </div>
  )
}

export default DocumentationCard