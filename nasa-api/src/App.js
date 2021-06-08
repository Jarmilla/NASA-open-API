import React, { useState, useEffect } from "react";
import AstronomyPictureOfTheDay from "./components/AstronomyPictureOfTheDay";
import PicturesOfPreviousDays from "./components/PictutesOfPreviousDays";
import "./App.css";

function App() {
  const key = "eScw6dlpwJ2AIBuldX1hVZD5Bl1TcnLm9GfqgRwx";
  const [inputDate, setInputDate] = useState(new Date().toISOString().slice(0, 10));
  const [choosenApodData, setChoosenApodData] = useState({});
  const [apodDatas, setApodDatas] = useState(null);

  function endDateValidation(inputDate) {
    return inputDate < "1995-06-22" ? "1995-06-22" : inputDate;
  }

  function startDateGeneration(date) {
    let transformToDate = new Date(date);
    transformToDate.setDate(transformToDate.getDate() - 6);
    return transformToDate.toISOString().slice(0, 10);
  }

  useEffect(() => {
    let endDate = endDateValidation(inputDate);
    let startDate = startDateGeneration(endDate);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDate}&end_date=${endDate}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(endDate, startDate, data);
        setChoosenApodData(data[data.length - 1]);
        setApodDatas(data);
      })
      .catch((err) => console.log("Fetch error: ", err));
  }, [inputDate]);

  return (
    <div>
      <div className="main-container">
        <h1>Astronomy Picture of the Day</h1>
        <input type="date" onInput={(e) => setInputDate(e.target.value)} />
        {inputDate < "1995-06-22" ? <p>Must be after 1995-06-21</p> : ""}

        <AstronomyPictureOfTheDay choosenApodData={choosenApodData} />
      </div>
      <PicturesOfPreviousDays apodDatas={apodDatas} choosenApodData={choosenApodData} setChoosenApodData={setChoosenApodData} />
    </div>
  );
}

export default App;
