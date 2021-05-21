import React from "react";

function AstronomyPictureOfTheDay({ apodData }) {
  return (
    <div>
      <h3>{apodData.title}</h3>
      <img src={apodData.url} alt={apodData.title} />
      <p>{apodData.explanation}</p>
      <p>{apodData.date}</p>
    </div>
  );
}

export default AstronomyPictureOfTheDay;
