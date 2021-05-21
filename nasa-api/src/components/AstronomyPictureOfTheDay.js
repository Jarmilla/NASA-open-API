import React from "react";

function AstronomyPictureOfTheDay({ apodData }) {
  return (
    <div>
      <h3>{apodData.title}</h3>
      {apodData.media_type === "image" ? (
        <img src={apodData.url} alt={apodData.title} />
      ) : (
        <iframe src={apodData.url} title={apodData.title} height="60%" frameBorder="0"></iframe>
      )}

      <p>{apodData.explanation}</p>
      <p>{apodData.date}</p>
    </div>
  );
}

export default AstronomyPictureOfTheDay;
