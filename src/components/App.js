import React from "react";
import { Route, Switch } from "react-router-dom";
import IntroPage from "./Intro Page/IntroPage"
import HomePage from "./Home Page/HomePage"
import ClosetPage from "./Closet Page/ClosetPage"
import InspoPage from "./Inspo Page/InspoPage"
import '../App.css';

function App() {
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
