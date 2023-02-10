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
    <div className="mt-12 flex-col flex items-center">
      <InputThings addThing={addThing}/>
      <Things remove={removeThing} things={things}/>
    </div>
  );
}

export default App;
