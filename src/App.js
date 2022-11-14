import React, { useEffect, useState } from 'react';
import Character from './components/Character'
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
           .then((res) => {
             const characterData = res.data.results;
             setData(characterData)
           })
           .catch((err) => {
             console.log(`Error! ${err}`)
           })
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data ? data.map((character, i) => (
        <Character characterInfo={character} key={i} />
      )) : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
