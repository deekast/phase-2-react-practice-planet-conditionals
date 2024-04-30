import React from 'react'

function PlanetFacts({planet}) {
  return (
    <>
      <p>{planet.fun_fact}</p>
      <p>Orbital Period: {planet.orbital_period_in_earth_days} Earth Days</p>
      <p>God of {planet.god_of.join(', ')}</p>
    </>
  )
}

export default PlanetFacts
