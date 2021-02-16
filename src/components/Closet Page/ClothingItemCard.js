import React, {useState} from "react";
import styled from "styled-components";

// complete toggle function!! 
//create small button for delete, maybe a trash can or something?? 
function ClothingItemCard({clothingItem, onDeleteClothing}) {
    const [purchaseToggle, setPurchaseToggle] = useState(true)
    const [purchased, setPurchased] = useState(true)

    // then call this on the onClick and pass in handlePurchaseToggle in the body of this function
    // function handleTogglePatch(e) {
    //     e.preventDefault

    //     fetch
    // }
    
    function handlePurchaseToggle(e) {
        e.preventDefault()

        const purchaseObj = {
            purchased: purchased
        }

        fetch(`http://localhost:3000/clothing_items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                purchaseObj
              })
          })
        setPurchaseToggle((purchaseToggle) => !purchaseToggle)
        setPurchased((purchased) => !purchased)
    }
    

    function handleClothingItemDelete() {
        fetch(`http://localhost:3000/clothing_items/${id}`, {
            method: "DELETE",
          })
          onDeleteClothing(id)
      }

    const {id, brand, size, description, season, img_url} = clothingItem;
    return (
        <Card>
            <h1>🌻🌷🌻🌷🌻🌷🌻🌷🌻</h1>
            <Image src={img_url} alt={brand}/>
            <Inputs>{brand}</Inputs>
            <Inputs>size: {size}</Inputs>
            <Inputs>season: {season}</Inputs>
            <Inputs>description: {description}</Inputs>
            {purchaseToggle ? (
                <button onClick={handlePurchaseToggle} className="not-purchased-button">Not Purchased</button>
            ) : (
                <button onClick={handlePurchaseToggle} className="purchased-button">Purchased</button>
            )}
            <button onClick={handleClothingItemDelete} className="ui-button-delete">Delete</button>
        </Card>
    )
}

export default ClothingItemCard;

const Inputs = styled.p`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    object-fit: contain;
`

const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  margin: 10px;
  padding: 5px;
  border: 1px solid light-blue;
  border-radius: 30px;
  overflow: scroll;
  transition: all 0.2s ease-in-out 0s;
  :hover {
    transform: scale(1.05);
    box-shadow: 2px 5px green;
  }
`;

const Image = styled.img`
    border: 1px solid #ddd; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px; /* Some padding */
  width: 250px; /* Set a small width */
 
  object-fit: contain;

`;