import React from "react";

function PicturesOfPreviousDays({ apodDatas, choosenApodData, setChoosenApodData }) {
  return (
    <div className="main-container">
      <h2>Previous Days</h2>
      <div className="flexed-picture-container">
        {apodDatas &&
          apodDatas
            .filter((data) => data.url !== choosenApodData.url)
            .map((data) => (
              <img
                key={data.url}
                src={data.url}
                alt={data.title}
                onClick={() => {
                  setChoosenApodData(data);
                  window.scrollTo(0, 0);
                }}
              />
            ))}
      </div>
    </div>
  );
}

export default PicturesOfPreviousDays;
