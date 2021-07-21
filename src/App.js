import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import mockRequest from "./mockResponse/codetestjson.json";

function App() {
  return (
    <div className="page-container">
      <Header {...mockRequest} />
      <Article {...mockRequest} />
    </div>
  );
}

export default App;
