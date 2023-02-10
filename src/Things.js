import React from 'react'
import Thing from './Thing'

const Things = ({things, remove}) => {
  return (
    <div className="w-full mt-8 flex-col flex items-center">
        {things.map(thing => 
          <Thing remove={remove} thing={thing} key={thing.id}/>
          )}
    </div>
  )
}

export default Things
