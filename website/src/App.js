import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import MenuBar from "./components/MenuBar";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";

import { Container } from "semantic-ui-react";

function App() {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route exact path="/" component={Movies} />
        <Route exact path="/tvshows" component={TVShows} />
      </Container>
    </Router>
  );
}

export default App;
