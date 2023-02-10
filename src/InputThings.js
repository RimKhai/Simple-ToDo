import React from 'react'
import { useState } from 'react'

const InputThings = ({addThing}) => {
    const [name, setName] = useState('')

    const addNewThing = (e) => {
        e.preventDefault()
        const newThing = {
          name, id: Date.now()
        }
        addThing(newThing)
        setName('')
      }

    return (
        <div className='flex-col flex items-center w-full'>
            <input 
                className="border-[3px] border-[#8181f8] duration-[2s] h-12 rounded-[20px] w-[40%] px-3 focus:duration-[3s] focus:border-[#4040fc] outline-none"
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
