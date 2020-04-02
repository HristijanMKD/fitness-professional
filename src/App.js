import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Main from "./components/main-content/main-content";
import GalleryPage from "./components/gallery-page/gallery-page";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="more-main-div">
      <div className="main-div-app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
