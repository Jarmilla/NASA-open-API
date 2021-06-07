import React from "react";

function PicturesOfPreviousDays({ apodDatas, apodDataToday }) {
  return (
    <div className="flexed-picture-container">
      {apodDatas && apodDatas.filter((data) => data.url !== apodDataToday.url).map((data) => <img key={data.url} src={data.url} alt={data.title} />)}
    </div>
  );
}

export default PicturesOfPreviousDays;
