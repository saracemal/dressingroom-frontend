import React from "react"
import ClothingItemCard from "./ClothingItemCard"
import styled from "styled-components"

//if clothing items === null, return "no clothes yet! let's add some."
// or display clothing item cards
function ClothingItemContainer({clothingItems, onDeleteClothing}) {

    let clothingItemCards
    if (clothingItems) {
        clothingItemCards = clothingItems.map((clothingItem) => (
            <ClothingItemCard key={clothingItem.id} clothingItem={clothingItem} onDeleteClothing={onDeleteClothing}/>
        ))
    } else {
        clothingItemCards = <p className="clothing-item-p"> No clothing to display. Let's add some! </p>
    }

    // const clothingItemCards = clothingItems.map((clothingItem) => (
    //     <ClothingItemCard key={clothingItem.id} clothingItem={clothingItem} handleClothingItemDelete={handleClothingItemDelete}/>
    // ))
    return (
        <ClosetWrapper>
            {clothingItemCards}
        </ClosetWrapper>
    )
   
}

export default ClothingItemContainer;
const ClosetWrapper = styled.div`
    // width: 80%;
    display: flex;
    flex-wrap: wrap;  
    flex-direction: row;
    text-align: center;
`

// const Title = styled.h1`
// font-family: 'Lemon', serif;
// `