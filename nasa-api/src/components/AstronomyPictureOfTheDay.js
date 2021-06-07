import React from "react";

function AstronomyPictureOfTheDay({ choosenApodData }) {
  return (
    <div className="astronomy">
      {choosenApodData && choosenApodData.media_type === "image" ? (
        <div className="image-container">
          <img src={choosenApodData.url} alt={choosenApodData.title} />
        </div>
      ) : (
        <iframe src={choosenApodData.url} title={choosenApodData.title} height="60%" frameBorder="0"></iframe>
      )}

      <h2>{choosenApodData.title}</h2>
      {choosenApodData?.copyright ? <p>Photo by: {choosenApodData.copyright}</p> : ""}
      <p>{choosenApodData.date}</p>

      <article>{choosenApodData.explanation}</article>
    </div>
  );
}

export default AstronomyPictureOfTheDay;
