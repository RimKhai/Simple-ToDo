import React from 'react'
import Thing from './Thing'

const Things = ({things}) => {
  return (
    <div className="w-full mt-8 flex-col flex items-center">
        {things.map(thing => 
          <Thing thing={thing} key={thing.id}/>
          )}
    </div>
  )
}

export default Things
