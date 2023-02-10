import React from "react";
import { useState } from "react";
import InputThings from "./InputThings";
import Things from "./Things";

function App() {
  const [things, setThings] = useState([{id: 1, name: 'покупки'}, {id: 2, name: 'покупки'}])


  const addThing = (newThing) => {
    setThings([...things, newThing])
  }

  const removeThing = thing => {
    setThings(things.filter(th => th.id !== thing.id))
  }



  return (
    <div className="flex-col flex items-center">
      <div className="flex justify-center border-b-[4px] border-[#8181f8] items-center w-full h-20 bg-white mb-12">
        <p className="font-bold text-[32px] text-[#8181f8]">ToDo</p>
      </div>
      <InputThings addThing={addThing}/>
      {things.length !== 0 ? <Things remove={removeThing} things={things}/> : <h1 className="mt-4">Нет Дел</h1>}
    </div>
  );
}

export default App;
