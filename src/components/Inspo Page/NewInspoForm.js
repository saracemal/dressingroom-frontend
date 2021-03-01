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
    <Wrapper>
        <Title>🌈 more inspiration 🌈</Title>
        <form onSubmit={handleNewInspoSubmit}>
            <Input>image:</Input> 
                <InputForm 
                    type="text"
                    name="image"
                    value={newInspoImg}
                    onChange={(e) => setNewInspoImg(e.target.value)}/>
            <Input>caption:</Input> 
                <InputForm 
                    type="text"
                    name="caption"
                    value={newInspoCaption}
                    onChange={(e) => setNewInspoCaption(e.target.value)}/>
                <button className="new-inspo-btn" type="submit">add inspo ♻️ </button>
           </form>
    </Wrapper>
    )
}

export default NewInspoForm;

const Title = styled.h1`
  font-family: 'Lemon', serif;
  text-align: center;
`
const Wrapper = styled.div`
  text-align: center;
  background-color: #9AF28D;
  opacity: 0.75;
  padding: 20px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out 0s;
  box-shadow: 1px 3px black;
  :hover {
        opacity: 1;
        transform: scale(1.05);
        box-shadow: 2px 5px black;
  }
`

const Input = styled.p`
font-family: 'Anonymous Pro', monospace;
text-align: center;
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