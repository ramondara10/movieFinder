import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// import Row from './components/Row/Row';
// import requests from './requests';
// import Banner from './components/Banner/Banner';
// import Nav from './components/Nav/Nav';

// export default App;
//<Nav />;
// 			<Banner />
// 			<Row title="Trending" fetchUrl={requests.fetchTrending} />
// 			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
// 			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
// 			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
// 			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
// 			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
// 			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
