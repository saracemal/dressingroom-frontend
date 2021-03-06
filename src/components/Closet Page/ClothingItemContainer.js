import React, {useState, useEffect} from "react"
import ClothingItemCard from "./ClothingItemCard"
import styled from "styled-components"

//  ADD CLOTHINGITEMS BACK AS PROP IF DOESN'T WORK 
function ClothingItemContainer({ closet, setCloset, clothingItems, setClothingItems, onDeleteClothing}) {
    // const params = useParams()
    // console.log(params);

    // const [closet, setCloset] = useState(null)
    // const [isLoaded, setIsLoaded] = useState(false)
    // const [clothingItems, setClothingItems] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:3000/closets/${params.id}`)
    //       .then((r) => r.json())
    //       .then((closet) => {
    //           setCloset(closet)
    //         // setCloset(closet.clothingItems);
    //         // setClothingItems(closet.clothingItems)
    //         console.log(closet);
    //         setIsLoaded(true);
    //         });
    //   }, [params.id]);
    
    //   useEffect(() => {
    //     fetch("http://localhost:3000/clothing_items")
    //     .then((r) => r.json())
    //     .then(setClothingItems)
    //   }, [])
    
    //   if (!isLoaded) return <h2>Loading...</h2>;

    //   const clothingItemCards = clothingItems
    //         .filter(clothingItem => clothingItem.closet_id === closet.id)
    //         .map(clothingItem => <ClothingItemCard key={clothingItem.id} closet={closet.id} clothingItem={clothingItem} onDeleteClothing={onDeleteClothing} />)
        const clothingItemCards = clothingItems.map((clothingItem) => (
            <ClothingItemCard key={clothingItem.id} clothingItem={clothingItem} onDeleteClothing={onDeleteClothing}/>
        ))
    return (
        <ClosetWrapper>
            {clothingItemCards}
        </ClosetWrapper>
    )
}

export default ClothingItemContainer;

// THIS ROUTES THE INDIVIDUAL CLOSET ITEMS
// {closet.clothing_items ? (closet.clothing_items.map((clothingItem) => (
//     <ClothingItemCard key={clothingItem.id} closet={closet.id} clothingItem={clothingItem} onDeleteClothing={onDeleteClothing} />))) : <H1>No items yet, let's add some!</H1>}


    // const clothingItemCards = clothingItems.map((clothingItem) => (
    //     <ClothingItemCard key={clothingItem.id} clothingItem={clothingItem} handleClothingItemDelete={handleClothingItemDelete}/>
    // ))

//     const params = useParams()
//     console.log(params);

// const [sortBy, setSortBy] = useState('id');
// const [searchedClothingItems, setSearchedClothingItems] = useState("")
// const [closet, setCloset] = useState(null)
// const [isLoaded, setIsLoaded] = useState(false)
// const [clothingItems, setClothingItems] = useState([])



const ClosetWrapper = styled.div`
    // width: 80%;
    display: flex;
    flex-wrap: wrap;  
    flex-direction: row;
    text-align: center;
`
const H1 = styled.h1`
    text-align: center;
    display: flex;
    font-family: 'Lemon', serif;
`
