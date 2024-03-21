import ImageBoard from "./Components/ImageBoard";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("dog");
  return (
    <div>
      <Navbar setQuery={setQuery} />
      <ImageBoard query={query} />
    </div>
  );
};

export default App;
