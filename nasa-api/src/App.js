import React, { useState, useEffect } from "react";
import "./App.css";

const key = "eScw6dlpwJ2AIBuldX1hVZD5Bl1TcnLm9GfqgRwx";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error: ", err));

function App() {
  return (
    <div className="App">
      <h2>Nasa</h2>
    </div>
  );
}

export default App;
