import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import mockRequest from "./mockResponse/codetestjson.json";

console.log(mockRequest);
function App() {
  // Mock get the json from file

  return (
    <div>
      <Header {...mockRequest} />
      <Article {...mockRequest} />
    </div>
  );
}

export default App;
