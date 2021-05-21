import React, { useState, useEffect } from "react";
import AstronomyPictureOfTheDay from "./components/AstronomyPictureOfTheDay";
import "./App.css";

function App() {
  const key = "eScw6dlpwJ2AIBuldX1hVZD5Bl1TcnLm9GfqgRwx";
  const [apodData, setApodData] = useState({});
  const [inputDate, setInputDate] = useState("");

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${inputDate}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApodData(data);
      })
      .catch((err) => console.log("Error: ", err));
  }, [inputDate]);

  return (
    <div className="App">
      <h2>Nasa</h2>
      <input type="date" onChange={(e) => setInputDate(e.target.value)} />
      <AstronomyPictureOfTheDay apodData={apodData} />
    </div>
  );
}

export default App;
