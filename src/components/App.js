
import React from "react";
import GifListContainer from "./GifListContainer"
import NavBar from "./NavBar";
import GitSearch from "./GifSearch"
import GitList from "./GifList"

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer/>
      
    </div>
  );
}

export default App;
