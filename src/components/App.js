import React, {useEffect, useState} from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import IntroPage from "./Intro Page/IntroPage"
import HomePage from "./Home Page/HomePage"
import ClosetPage from "./Closet Page/ClosetPage"
import InspoPage from "./Inspo Page/InspoPage"
import '../App.css';

function App() {
  let history = useHistory()
  // login states
  const [currentUser, setCurrentUser] = useState(null);

  // model states
  const [users, setUsers] = useState([])
  const [closets, setClosets] = useState([])
  const [clothingItems, setClothingItems] = useState([])
  const [inspos, setInspos] = useState([])

  //form states 
  const [userClosets, setUserClosets] = useState([])
  const [userInspos, setUserInspos] = useState([])
  const [userClothingItems, setUserClothingItems] = useState([])

  const [newCloset, setNewCloset] = useState("")
  const [newClosetName, setNewClosetName] = useState("")

  const [newInspo, setNewInspo] = useState("")
  const [newInspoImg, setNewInspoImg] = useState("")
  const [newInspoCaption, setNewInspoCaption] = useState("")

  const [newBrand, setNewBrand] = useState("")
  const [newSize, setNewSize] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newSeason, setNewSeason] = useState("")
  const [newImgUrl, setNewImgUrl] = useState("")



  // USER FETCH
  // useEffect(() => {
  //   fetch("http://localhost:3000/users")
  //   .then((r) => r.json())
  //   .then(setUsers)
  // }, [])

  // CLOSET FETCH
  useEffect(() => {
    fetch("http://localhost:3000/closets")
    .then((r) => r.json())
    .then(setClosets)
  }, [])

  //CLOTHING ITEM FETCH
  useEffect(() => {
    fetch("http://localhost:3000/clothing_items")
    .then((r) => r.json())
    .then(setClothingItems)
  }, [])


  // INSPO FETCH
  useEffect(() => {
    fetch("http://localhost:3000/inspos")
    .then((r) => r.json())
    .then(setInspos)
  }, [])

  //login fetches
    //
  useEffect(() => {
    fetch("http://localhost:3000/autologin")
      .then((r) => r.json())
      .then(setCurrentUser);
  }, []);

  function handleLogin() {
    fetch("http://localhost:3000/autologin")
      .then((r) => r.json())
      .then(setCurrentUser);
  }

  //CLOSET HANDLERS
  function handleNewStorySubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/closets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: currentUser,
        name: newClosetName
      })
    })
      .then((r) => r.json())
      .then(resObj => {
        setNewClosetName(resObj.name)
        history.pushState(`/closet/${resObj.id}`)
      })
  }

  function handleClosetDelete(closetId) {
    fetch(`http://localhost:3000/closets/${closetId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedCloset) => {
        const updatedClosetsArray = userClosets.filter(
          (closet) => closet.id !== deletedCloset.id
        )
        setUserClosets(updatedClosetsArray)
      })
  }

//INSPO HANDLERS
function handleInspoDelete(inspoId) {
    fetch(`http://localhost:3000/inspo/${inspoId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedInspo) => {
        const updatedInspoArray = userInspos.filter(
          (inspo) => inspo.id !== deletedInspo.id
        )
        setUserInspos(updatedInspoArray)
      })
}

function handleNewInspoSubmit(e) {
  e.preventDefault()
    fetch("http://localhost:3000/inspos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: currentUser,
        img_url: newInspoImg,
        caption: newInspoCaption
      })
    })
      .then((r) => r.json())
      .then(resObj => {
        setNewInspoImg(resObj.img_url)
        setNewInspoCaption(resObj.caption)
      })
}

// CLOTHING ITEM HANDLERS



function handleClothingItemDelete(clothingItemId) {
  fetch(`http://localhost:3000/clothingItemId/${clothingItemId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedClothingItem) => {
        const updatedClothingItemArray = userClothingItems.filter(
          (clothingItem) => clothingItem.id !== deletedClothingItem.id
        )
        setUserClothingItems(updatedClothingItemArray)
      })
}

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <IntroPage 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/home/:id">
          <HomePage 
          closets={closets}
          setClosets={setClosets}
          newCloset={newCloset}
          setNewCloset={setNewCloset}
          handleNewStorySubmit={handleNewStorySubmit}
          handleClosetDelete={handleClosetDelete}/>
        </Route>
        <Route exact path="/closet/:id">
          <ClosetPage
          clothingItems={clothingItems}
          setClothingItems={setClothingItems}
          handleClothingItemDelete={handleClothingItemDelete}
          newBrand={newBrand}
          setNewBrand={setNewBrand}
          newSize={newSize}
          setNewSize={setNewSize}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          newSeason={newSeason}
          setNewSeason={setNewSeason}
          newImgUrl={newImgUrl}
          setNewImgUrl={setNewImgUrl}
           />
        </Route>
        <Route exact path="/inspo">
          <InspoPage 
          inspos={inspos}
          setInspos={setInspos}
          handleInspoDelete={handleInspoDelete}
          newInspoImg={newInspoImg}
          setNewInspoImg={setNewInspoImg}
          newInspoCaption={newInspoCaption}
          setNewInspoCaption={setNewInspoCaption}
          handleNewInspoSubmit={handleNewInspoSubmit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
