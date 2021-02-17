import React from "react";
import styled from "styled-components";

//buttons appear upon hover! 
function InspoCard({inspo, onDeleteInspo}) {
    const {id, img_url, caption} = inspo;


    function handleInspoDelete() {
          fetch(`http://localhost:3000/inspos/${id}`, {
            method: "DELETE",
          })
            onDeleteInspo(id)
      }

   return (
       <Card>
           <h3>🌻🌷🌻🌷🌻🌷🌻🌷🌻🌷🌻🌷🌻🌷</h3>
           <Image src={img_url} alt={caption}/>
           <Caption>{caption}</Caption>
           <button onClick={handleInspoDelete} id={inspo.id} className="ui-button-delete">🗑</button>
       </Card>
   )
}

export default InspoCard;

const Caption = styled.p`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    object-fit: contain;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 10px;
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
  align-items: center;
  object-fit: contain;

`;