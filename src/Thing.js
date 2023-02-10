import React, { useState } from 'react'

const Thing = ({thing, remove}) => {
    return (
        <div 
            className="thereThing"
            onClick={() => {remove(thing)}}
            >
            <p>
                {thing.name}
            </p>
        </div>
  )
}

export default Thing
