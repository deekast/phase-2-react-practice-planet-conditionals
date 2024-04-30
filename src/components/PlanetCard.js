import React, { useState } from 'react';
import PlanetFacts from "./PlanetFacts";

function PlanetCard({ planet }) {
  const [showFacts, setShowFacts] = useState(false);

  const toggleFacts = () => {
    setShowFacts(!showFacts);
  };

  return (
    <div className="card" onClick={toggleFacts}>
      {showFacts ? (
        <PlanetFacts planet={planet} />
      ) : (
        <>
          <h2>{planet.name}</h2>
          <img className={planet.is_planet ? "" : "not-planet"} src={planet.image} alt={planet.name} />
        </>
      )}
    </div>
  );
}

export default PlanetCard;
