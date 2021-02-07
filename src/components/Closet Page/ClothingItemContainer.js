import React from "react"
import ClothingItemCard from "./ClothingItemCard"

//if clothing items === null, return "no clothes yet! let's add some."
// or display clothing item cards
function ClothingItemContainer({clothingItems, handleClothingItemDelete}) {

    const clothingItemCards = clothingItems.map((clothingItem) => (
        <ClothingItemCard key={clothingItem.id} clothingItem={clothingItem} handleClothingItemDelete={handleClothingItemDelete}/>
    ))
    return (
        <div>
            <h1>I am the clothingitem container</h1>
            {clothingItemCards}
        </div>
    )
   
}

export default ClothingItemContainer;