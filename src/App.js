import React, { useReducer } from "react";
import Navigation from "./components/components/Navigation";
import Home from "./components/components/Home";
import Teaser from "./components/components/Teaser";
import Publikationen from "./components/components/Publikationen";
import Footer from "./components/components/Footer";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Home></Home>
      <Teaser></Teaser>
      <Publikationen></Publikationen>
      <Footer></Footer>
    </div>
  );
}

export default App;
