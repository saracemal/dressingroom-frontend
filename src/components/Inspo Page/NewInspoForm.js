import React, {useState} from "react";
import styled from "styled-components";

function NewInspoForm({currentUser, onAddInspo}) {
const [newInspoImg, setNewInspoImg] = useState("")
const [newInspoCaption, setNewInspoCaption] = useState("")

    function handleNewInspoSubmit(e) {
        e.preventDefault()
        // const newInspoObj = {
        //   user_id: currentUser.id,
        //   img_url: newInspoImg, 
        //   caption: newInspoCaption
        // }
          fetch("http://localhost:3000/inspos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              // user_id: currentUser,
              img_url: newInspoImg, 
              caption: newInspoCaption
            })
          })
            .then((r) => r.json())
            .then((newInspo) => onAddInspo(newInspo))
            .then(data => console.log(data))
            // .then(resObj => {
            //   setNewInspoImg(resObj.img_url)
            //   setNewInspoCaption(resObj.caption)
            
            // })
      }

    return (
    <div className="new-inspo-form">
        <Title>🌈 more inspiration 🌈</Title>
        <form onSubmit={handleNewInspoSubmit}>
            <Input>image:</Input> 
                <input 
                    type="text"
                    name="image"
                    value={newInspoImg}
                    onChange={(e) => setNewInspoImg(e.target.value)}/>
            <Input>caption:</Input> 
                <input 
                    type="text"
                    name="caption"
                    value={newInspoCaption}
                    onChange={(e) => setNewInspoCaption(e.target.value)}/>
                <button className="new-inspo-btn" type="submit">add inspo ♻️ </button>
           </form>
    </div>
    )
}

export default NewInspoForm;

const Title = styled.h1`
  font-family: 'Lemon', serif;
`

const Input = styled.p`
font-family: 'Anonymous Pro', monospace;
`