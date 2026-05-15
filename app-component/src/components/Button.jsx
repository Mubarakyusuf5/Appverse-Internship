import React from 'react'

export const Button = ({title, color, click}) => {
  return (
    <div>
        <button onClick={click} className='btn' style={{background: color}}>
            {title}
        </button>
    </div>
  )
}
