import React from "react"
import ClothingItemContainer from "./ClothingItemContainer"
import NewClothingItemForm from "./NewClothingItemForm"
import SortingContainer from "./SortingContainer"
import MainHeader from "../MainHeader"

function ClosetPage({clothingItems, handleClothingItemDelete}) {
    return (
        <div>
            <MainHeader />
            <ClothingItemContainer clothingItems={clothingItems} handleClothingItemDelete={handleClothingItemDelete}/>
            <NewClothingItemForm />
            <SortingContainer />
        </div>
    )
   
}

export default ClosetPage;