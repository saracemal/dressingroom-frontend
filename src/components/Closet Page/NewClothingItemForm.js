import React, {useState} from "react"
import styled from "styled-components"

function NewClothingItemForm({closet, setCloset, currentUser, onAddClothing}) {
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
        // closet_id: 1,
        brand: newBrand,
        size: newSize,
        description: newDescription, 
        season: newSeason,
        img_url: newImgUrl
      })
    })
      .then((r) => r.json())
      .then((newClothingItem) => onAddClothing(newClothingItem))
      // onAddClothing(newClothingItem))
      // setCloset(closet.id))
    //   .then(resObj => {
    //     setNewBrand(resObj.brand)
    //     setNewSize(resObj.size)
    //     setNewDescription(resObj.description)
    //     setNewSeason(resObj.season)
    //     setNewImgUrl(resObj.img_url)
  }
    
   return (
       <NewClothingItemWrapper>
           <Title>🌱 closet addition 🌱</Title>
           <form onSubmit={handleNewClothingItemSubmit}>
            <Inputs>brand:</Inputs> 
                <InputForm 
                    type="text"
                    name="brand"
                    placeholder="brand"
                    value={newBrand}
                    onChange={(e) => setNewBrand(e.target.value)}/>
                <Inputs>size:</Inputs> 
                    <InputForm 
                    type="number"
                    name="size"
                    placeholder="size"
                    value={newSize}
                    onChange={(e) => setNewSize(parseInt(e.target.value))}/>
                <Inputs >description:</Inputs> 
                    <InputForm 
                    type="text"
                    name="description"
                    placeholder="description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}/>
                <Inputs >season:</Inputs> 
                    <InputForm 
                    type="text"
                    name="season"
                    placeholder="season"
                    value={newSeason}
                    onChange={(e) => setNewSeason(e.target.value)}/>
                <Inputs >image: </Inputs> 
                    <InputForm 
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={newImgUrl}
                    onChange={(e) => setNewImgUrl(e.target.value)}/>
                <button type="submit" className="new-item">✨ add new item ✨</button>
           </form>
       </NewClothingItemWrapper>
   )
}

export default NewClothingItemForm;

const NewClothingItemWrapper = styled.div`
  font-family: 'Anonymous Pro', monospace;
  text-align: center;
  display: flex;
  color: black;
  flex-direction: row;
  background-color: #9AF28D;
  height: 500px;
  width: 800px;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.75;
  padding: 20px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out 0s;
  :hover {
      transform: scale(1.00);
      opacity: 1;
      box-shadow: 2px 5px black;
  }
`

const Inputs = styled.p`
font-family: 'Anonymous Pro', monospace;
`
const Title = styled.h1`
    font-family: 'Lemon', serif;
`
const InputForm = styled.input`
  text-align: center;
  width: 250px;
  height: 30px;
  border: 0;
  color: black;
  border-radius: 5px;
  background: opacity: 0.5;
  font-family: 'Anonymous Pro', monospace;
  border-bottom: 2px dotted black;
  :focus { outline: none; }
`