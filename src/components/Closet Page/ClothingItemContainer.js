import React from "react"
import ClothingItemCard from "./ClothingItemCard"

//if clothing items === null, return "no clothes yet! let's add some."
// or display clothing item cards
function ClothingItemContainer({clothingItems, handleClothingItemDelete}) {

    let clothingItemCards
    if (clothingItems) {
        clothingItemCards = clothingItems.map((clothingItem) => (
            <ClothingItemCard key={clothingItem.id} clothingItem={clothingItem} handleClothingItemDelete={handleClothingItemDelete}/>
        ))
    } else {
        clothingItemCards = <p className="clothing-item-p"> No clothing to display. Let's add some! </p>
    }

    // const clothingItemCards = clothingItems.map((clothingItem) => (
    //     <ClothingItemCard key={clothingItem.id} clothingItem={clothingItem} handleClothingItemDelete={handleClothingItemDelete}/>
    // ))
    return (
        <div className="clothing-container">
            <h1>I am the clothingitem container</h1>
            {clothingItemCards}
        </div>
    )
   
}

export default ClothingItemContainer;