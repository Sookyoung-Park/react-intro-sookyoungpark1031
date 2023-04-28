import React from 'react';

function VideoDetail({ video }) {
  // Here's a snippet that'll help
  if (!video) {
    return <div>Loading...</div>;
  }
  const { videoId } = video.id;

  return (

    <div id="embed-responsive embed-responsive-16by9">
      <iframe title="youtube detail" className="embed-responsive-item" src={url} />
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
