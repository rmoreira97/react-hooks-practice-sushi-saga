import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, eatSushi, displayNextSushis }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi key={sushi.id} {...sushi} eatSushi={eatSushi} />
      ))}
      <MoreButton displayNextSushis={displayNextSushis} />
    </div>
  );
}

export default SushiContainer;