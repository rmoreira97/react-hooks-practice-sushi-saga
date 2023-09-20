import React from "react";

function Sushi({ id, name, img_url, price, eaten, eatSushi }) {
  const handleEat = () => {
    if (!eaten) eatSushi(id, price);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {eaten ? null : (
          <img src={img_url} alt={name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">{name} - ${price}</h4>
    </div>
  );
}

export default Sushi;