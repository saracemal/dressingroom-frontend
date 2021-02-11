import React, {useEffect, useState} from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import IntroPage from "./Intro Page/IntroPage"
import HomePage from "./Home Page/HomePage"
import ClosetPage from "./Closet Page/ClosetPage"
import InspoPage from "./Inspo Page/InspoPage"
import '../App.css';

function App() {
  // login states
  const [currentUser, setCurrentUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginUsername, setLoginUsername] = useState("")
  const [newUserName, setNewUserName] = useState("")

  // model states
  const [users, setUsers] = useState([])
  const [closets, setClosets] = useState([])
  const [clothingItems, setClothingItems] = useState([])
  const [inspos, setInspos] = useState([])

  //form states 
  const [userClosets, setUserClosets] = useState([])
  const [userInspos, setUserInspos] = useState([])
  const [userClothingItems, setUserClothingItems] = useState([])


  // const [newInspo, setNewInspo] = useState("")
  // const [newInspoImg, setNewInspoImg] = useState("")
  // const [newInspoCaption, setNewInspoCaption] = useState("")


  let history = useHistory();


  // USER FETCH
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((r) => r.json())
    .then(setUsers)
  }, [])

  //LOGIN AND CREATE ACCT FUNCTIONS
  function handleLoginSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then(userArr => {
        userArr.forEach(user => {
          if (user.name === loginUsername) {
              setIsLoggedIn(true)
              setCurrentUser(user)
              setUserClosets(user.closets)
              setUserInspos(user.inspos)
              // history.push(`/home/${user.id}`)
          }
        })
      })
  }

  function handleCreateAccountSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newUserName
      })
    })
      .then((r) => r.json())
      .then(newUser => {
        setCurrentUser(newUser)
        setIsLoggedIn(true)
        setUserClosets(newUser.closets)
        setUserInspos(newUser.inspos)
      })
  }

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
  // useEffect(() => {
  //   fetch("http://localhost:3000/autologin")
  //     .then((r) => r.json())
  //     .then(setCurrentUser);
  // }, []);

  // function handleLogin() {
  //   fetch("http://localhost:3000/autologin")
  //     .then((r) => r.json())
  //     .then(setCurrentUser);
  // }


  
  //CLOSET HANDLERS
  function handleAddCloset(newCloset) {
    const updatedClosetArray = [...closets, newCloset];
    setClosets(updatedClosetArray)
  }

  function handleDeleteCloset(id) {
    const remainingClosets = closets.filter((closet) => closet.id !== id)
    setClosets(remainingClosets);
  }


  // function handleClosetDelete(closetId) {
  //   fetch(`http://localhost:3000/closets/${closetId}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then((deletedCloset) => {
  //       const updatedClosetsArray = userClosets.filter(
  //         (closet) => closet.id !== deletedCloset.id
  //       )
  //       setUserClosets(updatedClosetsArray)
  //     })
  // }

//INSPO HANDLERS
function handleDeletedInspo(id) {
  const remainingInspos = inspos.filter((inspo) => inspo.id !== id)
  setInspos(remainingInspos);
}


// function handleAddInspo(newInspo) {
//   const updatedInsposArray = [...inspos, newInspo];
//   setInspos(updatedInsposArray)
// }



// function handleNewInspoSubmit(e) {
//   e.preventDefault()

//   const newInspoObj = {
//     user_id: currentUser,
//     img_url: newInspoImg, 
//     caption: newInspoCaption
//   }

//     fetch("http://localhost:3000/inspos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//        newInspoObj
//       })
//     })
//       .then((r) => r.json())
//       // .then(data => console.log(data))
//       .then(resObj => {
//         setNewInspoImg(resObj.img_url)
//         setNewInspoCaption(resObj.caption)
      
//       })
// }

// CLOTHING ITEM HANDLERS
function handleAddClothingItem(newClothingItem) {
  const updatedClothingArray = [newClothingItem, ...clothingItems];
  setClothingItems(updatedClothingArray)
}

function handleDeleteClothingItem(id) {
  const remainingClothing = clothingItems.filter((clothingItem) => clothingItem.id !== id)
  setClothingItems(remainingClothing);
}


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {!isLoggedIn ? (
            <IntroPage 
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            handleLoginSubmit={handleLoginSubmit}
            loginUsername={loginUsername}
            setLoginUsername={setLoginUsername}
            newUserName={newUserName}
            setNewUserName={setNewUserName}
            handleCreateAccountSubmit={handleCreateAccountSubmit}
            />
          ) : (
            <Redirect to="/home" />
            )}
        </Route>
        <Route exact path="/home">
          <HomePage 
          currentUser={currentUser}
          closets={closets}
          setClosets={setClosets}
          onDeleteCloset={handleDeleteCloset}
          onAddCloset={handleAddCloset}
          // handleClosetDelete={handleClosetDelete} 
          />
        </Route>
        <Route exact path="/closet/:id">
          <ClosetPage
          currentUser={currentUser}
          onDeleteClothing={handleDeleteClothingItem}
          onAddClothing={handleAddClothingItem}
          clothingItems={clothingItems}
          setClothingItems={setClothingItems}
           />
        </Route>
        <Route exact path="/inspo">
          <InspoPage 
          currentUser={currentUser}
          inspos={inspos}
          setInspos={setInspos}
          onDeleteInspo={handleDeletedInspo}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
