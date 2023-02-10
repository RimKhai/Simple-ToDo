import React from 'react'

const Thing = ({thing}) => {
  return (
    <div 
        className="w-[20%] h-12 border-[2px] rounded-[20px] mt-2 flex justify-center items-center"
        >
        <p>
            {thing.name}
        </p>
    </div>
  )
}

export default Thing
