import React from "react";

function VideoComponent({ videoUrl }) {
  const getYouTubeVideoId = (url) => {
    let videoId = "";
    if (url.indexOf("youtube.com/watch?v=") !== -1) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.indexOf("youtu.be/") !== -1) {
      videoId = url.split("youtu.be/")[1];
    }
    return videoId;
  };

  return (
    <div>
      <iframe
        className="w-full"
        width="800"
        height="315"
        src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoComponent;
