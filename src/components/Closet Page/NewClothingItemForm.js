import React, {useState} from "react"
import styled from "styled-components"

function NewClothingItemForm({currentUser, onAddClothing}) {
const [newBrand, setNewBrand] = useState("")
const [newSize, setNewSize] = useState("")
const [newDescription, setNewDescription] = useState("")
const [newSeason, setNewSeason] = useState("")
const [newImgUrl, setNewImgUrl] = useState("")
// const [purchased, setPurchased] = useState(true)

function handleNewClothingItemSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/clothing_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        brand: newBrand,
        size: newSize,
        description: newDescription, 
        season: newSeason,
        img_url: newImgUrl
      })
    })
      .then((r) => r.json())
      .then((newClothingItem) => onAddClothing(newClothingItem))
    //   .then(resObj => {
    //     setNewBrand(resObj.brand)
    //     setNewSize(resObj.size)
    //     setNewDescription(resObj.description)
    //     setNewSeason(resObj.season)
    //     setNewImgUrl(resObj.img_url)
  }
    
   return (
       <div className="new-clothingitem-form">
           <Title>🌱 closet addition 🌱</Title>
           <form onSubmit={handleNewClothingItemSubmit}>
            <Inputs>brand:</Inputs> 
                <input 
                    type="text"
                    name="brand"
                    placeholder="brand"
                    value={newBrand}
                    onChange={(e) => setNewBrand(e.target.value)}/>
                <Inputs>size:</Inputs> 
                    <input 
                    type="number"
                    name="size"
                    placeholder="size"
                    value={newSize}
                    onChange={(e) => setNewSize(parseInt(e.target.value))}/>
                <Inputs >description:</Inputs> 
                    <input 
                    type="text"
                    name="description"
                    placeholder="description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}/>
                <Inputs >season:</Inputs> 
                    <input 
                    type="text"
                    name="season"
                    placeholder="season"
                    value={newSeason}
                    onChange={(e) => setNewSeason(e.target.value)}/>
                <Inputs >image: </Inputs> 
                    <input 
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={newImgUrl}
                    onChange={(e) => setNewImgUrl(e.target.value)}/>
                <button type="submit" className="new-item">✨ add new item ✨</button>
           </form>
       </div>
   )
}

export default NewClothingItemForm;

const Inputs = styled.p`
font-family: 'Anonymous Pro', monospace;
`

const Title = styled.h1`
    font-family: 'Lemon', serif;
`