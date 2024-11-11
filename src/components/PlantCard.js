import React,{ useState }from "react";


function PlantCard({name, image, price}) {
  const [inStock, setinStock] = useState(true)
  const handleStockButton = () => setinStock(!inStock)
  

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockButton}>In Stock</button>
      ) : (
        <button onClick={handleStockButton}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
