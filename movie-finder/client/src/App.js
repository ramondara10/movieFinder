import React from "react";
import "./App.css";
// import Row from "./components/Row/Row";
// import requests from "./requests";
// import Banner from "./components/Banner/Banner";
// import Nav from "./components/Nav/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from"./components/Login/Login"
import Home from "./components/Home/Home"

function App() {
  // const user = false;
  return (
    <div className="app">
      <Router>
        {/* {!user ? (
          <Login/>
        ):(
           <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        )} */}

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
      </Router>
    </div>
  );
}

export default App;
