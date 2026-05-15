import React from 'react'
import { Button } from './Button'

export const Model = ({modelTitle, btnTitle, click}) => {
  return (
    <div className='modal'>

        <form>
            <div className='modal-head'>
        <h2>{modelTitle}</h2>
        <button onClick={click}>X</button>
            </div>
        <div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="text" />
            </div>
        </div>
            <Button title={btnTitle} color={"blue"} />
        </form>
    </div>
  )
}
