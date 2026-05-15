import React, { useState } from 'react'
import "./App.css"
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Model } from './components/Model'

export const App = () => {
const [isOpen, setIsOpen] = useState(false)
  return (
    <div>


      <div className='container'>
        {/* btn component */}
        <Button title={"Button 1"} color={"red"} />

        {/* card component */}
        <Card cardTitle={`Card Title`} cardDesc={"lorem ipsum and so on in the ahead of time."} image={"/profile pic.jpg"} alt={"none provided"} />
<Button title={"Open Modal"} color={"blue"} click={()=>setIsOpen(true)} />
      </div>
        {/* models component */}
        {isOpen && <Model modelTitle={"Login Form"} btnTitle={"Login"} click={()=> setIsOpen(false)} />}
    </div>
  )
}
