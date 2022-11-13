import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import axios from 'axios';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState(null);
  useEffect(() => {
    const URL = 'https://swapi.dev/api/people/';
    axios.get(URL)
         .then(res => {
           setData(res.data.results)
         })
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList characters={data} />
    </div>
  );
}

export default App;
