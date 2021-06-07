import React from "react";

function AstronomyPictureOfTheDay({ apodDataToday }) {
  return (
    <div className="astronomy">
      {apodDataToday && apodDataToday.media_type === "image" ? (
        <div className="image-container">
          <img src={apodDataToday.url} alt={apodDataToday.title} />
        </div>
      ) : (
        <iframe src={apodDataToday.url} title={apodDataToday.title} height="60%" frameBorder="0"></iframe>
      )}

      <h2>{apodDataToday.title}</h2>
      {apodDataToday?.copyright ? <p>Photo by: {apodDataToday.copyright}</p> : ""}

      <article>{apodDataToday.explanation}</article>
    </div>
  );
}

export default AstronomyPictureOfTheDay;
