import React, { useState, useEffect } from "react";
import AstronomyPictureOfTheDay from "./components/AstronomyPictureOfTheDay";
import PicturesOfPreviousDays from "./components/PictutesOfPreviousDays";
import "./App.css";

function App() {
  const key = "eScw6dlpwJ2AIBuldX1hVZD5Bl1TcnLm9GfqgRwx";
  const [inputDate, setInputDate] = useState(new Date().toISOString().slice(0, 10));
  const [weekBeforeInputDate, setWeekBeforeInputDate] = useState(inputDate);
  const [choosenApodData, setChoosenApodData] = useState({});
  const [apodDatas, setApodDatas] = useState(null);

  useEffect(() => {
    let transformToDate = new Date(inputDate);
    transformToDate.setDate(transformToDate.getDate() - 6);
    setWeekBeforeInputDate(transformToDate.toISOString().slice(0, 10));
  }, [inputDate]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${weekBeforeInputDate}&end_date=${inputDate}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(inputDate, weekBeforeInputDate, data);
        setChoosenApodData(data[data.length - 1]);
        setApodDatas(data);
      })
      .catch((err) => console.log("Fetch error: ", err));
  }, [inputDate, weekBeforeInputDate]);

  return (
    <div>
      <div className="main-container">
        <h1>Astronomy Picture of the Day</h1>
        <input type="date" onChange={(e) => setInputDate(e.target.value)} />

        <AstronomyPictureOfTheDay choosenApodData={choosenApodData} />
      </div>
      <PicturesOfPreviousDays apodDatas={apodDatas} choosenApodData={choosenApodData} setChoosenApodData={setChoosenApodData} />
    </div>
  );
}

export default App;
