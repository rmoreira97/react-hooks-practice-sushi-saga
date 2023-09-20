import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [budget, setBudget] = useState(100000000);  // Initial budget is $100

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then(setSushis);
  }, []);

  const eatSushi = (id, price) => {
    if (budget >= price) {
      setSushis((prevSushis) =>
        prevSushis.map((sushi) => 
          sushi.id === id ? { ...sushi, eaten: true } : sushi
        )
      );
      setBudget((prevBudget) => prevBudget - price);
    }
  };

  const displayNextSushis = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis.slice(startIndex, startIndex + 4)} 
        eatSushi={eatSushi}
        displayNextSushis={displayNextSushis} 
      />
      <Table plates={sushis.filter((sushi) => sushi.eaten)} budget={budget} />
    </div>
  );
}

export default App;