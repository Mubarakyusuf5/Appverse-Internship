import React from 'react'

export const Card = ({cardTitle, cardDesc, image, alt}) => {
  return (
    <div className='card'>
        <img src={image} alt={alt} />
        <div className="card-con">
            <h2>{cardTitle}</h2>
            <p>{cardDesc}</p>
        </div>
    </div>
  )
}
