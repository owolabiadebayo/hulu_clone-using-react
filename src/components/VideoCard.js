import React from "react";
import "./VideoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function VideoCard() {
  return (
    <div className="videoCard">
      <img
        src="https://image.tmdb.org/t/p/original//86L8wqGMDbwURPni2t7FQ0nDjsH.jpg"
        alt="movie-img"
      />

      <p>
        <span>
          The work of billionaire tech CEO Donovan Chalmers is so valuable…
        </span>
      </p>

      <h2>Hard Kill</h2>

      <p className="videoCard__stats">
        <span>Movie</span>
        <FiberManualRecordIcon style={{ fontSize: "8px" }} />
        <span>2020-08-25</span>
        <FiberManualRecordIcon style={{ fontSize: "8px" }} />
        <ThumbUpIcon />
        <span>47</span>
      </p>
    </div>
  );
}

export default VideoCard;
