import React from 'react'
import { useState } from 'react'

const InputThings = ({addThing}) => {
    const [name, setName] = useState('')

    const addNewThing = (e) => {
        e.preventDefault()
        const newThing = {
          ...name, id: Date.now()
        }
        addThing(newThing)
        setName('')
      }

    return (
        <div>
            <div className="font-bold text-[32px] mb-4">ToDo</div>
            <input 
                className="border-[3px] h-12 rounded-[20px] w-[40%] px-3"
                value={name}
                onChange={event => setName(event.target.value)}  
                ></input>
            <button 
                className="border-[3px #8181f8] rounded-[10px] w-[20%] h-8 mt-4 bg-[#8181f8] text-white"
                onClick={addNewThing}
            >Submit</button>
        </div>
  )
}

export default InputThings
