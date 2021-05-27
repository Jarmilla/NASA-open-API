import React from "react";

function AstronomyPictureOfTheDay({ apodData }) {
  return (
    <div className="astronomy">
      {apodData.media_type === "image" ? (
        <div className="image-container">
          <img src={apodData.url} alt={apodData.title} />
        </div>
      ) : (
        <iframe src={apodData.url} title={apodData.title} height="60%" frameBorder="0"></iframe>
      )}

      <h2>{apodData.title}</h2>
      <article>{apodData.explanation}</article>
    </div>
  );
}

export default AstronomyPictureOfTheDay;
