import React from 'react';

function VideoList(props) {
  const videoItems = props.videos.map((video) => {
    return <li>{video.snippet.title}</li>;
  });

  return (
    <ul>
      {videoItems}

    </ul>
  );
}

export default VideoList;
