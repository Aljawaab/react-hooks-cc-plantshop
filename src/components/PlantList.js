import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";


function PlantList() { 
const [plants, setplants] = useState([])


 useEffect(() => {
   const baseURL = "http://localhost:6001/plants"

   fetch(baseURL)
    .then(resp => resp.json())
    .then((plantsData) => setplants(plantsData))

 }, [])
 


 
  return (
    <ul className="cards"> 
      {plants.map(plant => (
        <PlantCard 
          key={plant.id} 
          name={plant.name} 
          image={plant.image} 
          price={plant.price} 
        />
      ))}
    </ul>
  );
}

export default PlantList;



