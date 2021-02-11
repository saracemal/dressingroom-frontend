import React, {useState} from "react"

// complete toggle function!! 
//create small button for delete, maybe a trash can or something?? 
function ClothingItemCard({clothingItem, onDeleteClothing}) {
    const [purchaseToggle, setPurchaseToggle] = useState(true)

    function handlePurchaseToggle() {
        setPurchaseToggle((purchaseToggle) => !purchaseToggle)
    }
    

    function handleClothingItemDelete() {
        fetch(`http://localhost:3000/clothing_items/${id}`, {
            method: "DELETE",
          })
          onDeleteClothing(id)
      }

    const {id, brand, size, description, season, img_url} = clothingItem;
    return (
        <div>
            <h1>clothing item card </h1>
            <img src={img_url} alt={brand}/>
            <p>{brand}</p>
            <p>size: {size}</p>
            <p>season: {season}</p>
            <p>description: {description}</p>
            {purchaseToggle ? (
                <button onClick={handlePurchaseToggle} className="not-purchased-button">Not Purchased</button>
            ) : (
                <button onClick={handlePurchaseToggle} className="purchased-button">Purchased</button>
            )}
            <button onClick={handleClothingItemDelete} className="ui-button-delete">Delete</button>
        </div>
    )
   
}

export default ClothingItemCard;