import React from 'react';

function VideoDetail({ video }) {
  const { videoId } = video.id; // will give linting error - read it and decide for yourself
  // const {videoId} = video.id // is example of destructuring, pulling videoId from out of the object that is video.id
  const url = `https://www.youtube.com/embed/${videoId}`;

  // Here's a snippet that'll help
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div id="video-detail">
      <iframe src={url} title="video-detail" />
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
