import React from "react"

// complete toggle function!! 
//create small button for delete, maybe a trash can or something?? 
function ClothingItemCard({clothingItem, handleClothingItemDelete}) {
    const {id, brand, size, description, season, img_url} = clothingItem;
    return (
        <div>
            <h1>clothing item card </h1>
            <img src={img_url} alt={brand}/>
            <p>{brand}</p>
            <p>size: {size}</p>
            <p>season: {season}</p>
            <p>description: {description}</p>
            <button  class="ui button delete">Purchased / Not Purchased </button>
            <button onClick={handleClothingItemDelete} class="ui button delete">delete</button>
        </div>
    )
   
}

export default ClothingItemCard;