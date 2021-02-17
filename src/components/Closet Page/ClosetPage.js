import React, {useState} from "react"
import ClothingItemContainer from "./ClothingItemContainer"
import NewClothingItemForm from "./NewClothingItemForm"
import SortingContainer from "./SortingContainer"
import MainHeader from "../MainHeader"
import Disclaimer from "./Disclaimer"
import styled from "styled-components"
// import { Link, useParams } from "react-router-dom";

function ClosetPage({ onDeleteClothing, onAddClothing, currentUser, closet, setCloset}) {
    // const { id } = useParams();
//     const params = useParams()
//     console.log(params);

const [sortBy, setSortBy] = useState('id');
const [searchedClothingItems, setSearchedClothingItems] = useState("")
// const [closet, setCloset] = useState(null)
// const [isLoaded, setIsLoaded] = useState(false)
const [clothingItems, setClothingItems] = useState([])

// useEffect(() => {
//     fetch(`http://localhost:3000/closets/${params.id}`)
//       .then((r) => r.json())
//       .then((closet) => {
//         setCloset(closet.clothingItems);
//         console.log(closet);
//         setIsLoaded(true);
//       });
//   }, [params.id]);

//   useEffect(() => {
//     fetch("http://localhost:3000/clothing_items")
//     .then((r) => r.json())
//     .then(setClothingItems)
//   }, [])

//   if (!isLoaded) return <h2>Loading...</h2>;

    
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
        <Wrapper>
            <MainHeader />
            <Title>I'm looking for: </Title>
            <SortingContainer onSearchChange={setSearchedClothingItems} />
            <button className="id-btn" onClick={() => setSortBy('id')}>Sort by Default</button>
            <button className="brand-btn" onClick={() => setSortBy('brand')}>Sort by Brand </button>
            <ClothingItemContainer 
            clothingItems={filteredClothingItems} 
            onDeleteClothing={onDeleteClothing}
            />
            <NewClothingItemForm
            closet={closet}
            setCloset={setCloset}
            currentUser={currentUser}
            onAddClothing={onAddClothing} />
            <Disclaimer />
        </Wrapper>
    )
   
}

export default ClosetPage;

const Wrapper = styled.div`
    background-color: lavender;
    text-align: center;
`
const Title = styled.h1`
    text-align: center;
    font-family: 'Lemon', serif;
`