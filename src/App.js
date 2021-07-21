import React from 'react';
import Header from './components/Header';
import mockRequest from './mockResponse/codetestjson.json'

console.log(mockRequest);
function App() {
  // Mock get the json from file


  return <Header {...mockRequest}/>;
}

export default App;
