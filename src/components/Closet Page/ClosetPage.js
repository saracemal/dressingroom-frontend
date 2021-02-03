import React from "react"
import ClothingItemContainer from "./ClothingItemContainer"
import ClothingItemCard from "./ClothingItemCard"
import NewClothingItemForm from "./NewClothingItemForm"
import SortingContainer from "./SortingContainer"
import MainHeader from "../MainHeader"

function ClosetPage() {
    return (
        <div>
            <MainHeader />
            <ClothingItemContainer />
            <ClothingItemCard />
            <NewClothingItemForm />
            <SortingContainer />
        </div>
    )
   
}

export default ClosetPage;