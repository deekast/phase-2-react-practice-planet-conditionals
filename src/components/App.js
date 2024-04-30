import React, { useState, useEffect } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from "./PlanetsContainer"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [planets, setPlanets] = useState([])


  useEffect(() => {
    console.log('fetching planets...')
    fetch('http://localhost:4001/planets')
    .then(res => res.json())
    .then(data => setPlanets(data))
  }, [])

  // console.log(planets)

  return (
    <div className="App">

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button>Light Mode</button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
