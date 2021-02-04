import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import IntroPage from "./Intro Page/IntroPage"
import HomePage from "./Home Page/HomePage"
import ClosetPage from "./Closet Page/ClosetPage"
import InspoPage from "./Inspo Page/InspoPage"
import '../App.css';

function App() {
  const [users, setUsers] = useState([])
  const [closets, setClosets] = useState([])
  const [clothingItems, setClothingItems] = useState([])
  const [inspos, setInspos] = useState([])

  // USER FETCH
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((r) => r.json())
    .then(setUsers)
  }, [])

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




  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <IntroPage />
        </Route>
        <Route exact path="/home/:id">
          <HomePage />
        </Route>
        <Route exact path="/closet/:id">
          <ClosetPage />
        </Route>
        <Route exact path="/inspo">
          <InspoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
