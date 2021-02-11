import React, {useState} from "react"
import ClothingItemContainer from "./ClothingItemContainer"
import NewClothingItemForm from "./NewClothingItemForm"
import SortingContainer from "./SortingContainer"
import MainHeader from "../MainHeader"
import Disclaimer from "./Disclaimer"

function ClosetPage({clothingItems, onDeleteClothing, onAddClothing, currentUser}) {
//sort by id, alphabetically, brand
const [sortBy, setSortBy] = useState('id');
const [searchedClothingItems, setSearchedClothingItems] = useState("")
    
const filteredClothingItems = clothingItems.filter((clothingItem) => {
    return clothingItem.brand.toLowerCase().includes(searchedClothingItems.toLowerCase())
})

const sortedClothingItems = filteredClothingItems.sort((clothingItemA, clothingItemB) => {
    if (sortBy === 'id') {
        return clothingItemA.id - clothingItemB.id;
    } else {
        return clothingItemA.brand.localeCompare(clothingItemB.brand)
    }
})
    
    return (
        <div className="closet-container">
            <MainHeader />
            <ClothingItemContainer 
            clothingItems={sortedClothingItems} 
            onDeleteClothing={onDeleteClothing}
            />
            <NewClothingItemForm
            currentUser={currentUser}
            onAddClothing={onAddClothing} />
            <SortingContainer onSearch={setSearchedClothingItems} />
            <Disclaimer />
        </div>
    )
   
}

export default ClosetPage;