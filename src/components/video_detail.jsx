// import React from 'react';

// function VideoDetail({ video }) {
//   // Here's a snippet that'll help
//   if (!video) {
//     return <div>Loading...</div>;
//   }
//   const { videoId } = video.id;

//   return (

//     <div id="embed-responsive embed-responsive-16by9">
//       <iframe title="youtube detail" className="embed-responsive-item" src={url} />
//       <div className="details">
//         <div>{video.snippet.title}</div>
//         <div>{video.snippet.description}</div>
//       </div>
//     </div>
//   );
// }

// export default VideoDetail;

import React from 'react';
import { useSelector } from 'react-redux';

function VideoDetail() {
  const selectedVideo = useSelector((state) => state.video.selected);

  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const { videoId } = selectedVideo.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <div className="videodetailvideo">
        <iframe title="youtube detail"
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div className="title">{selectedVideo.snippet.title}</div>
        <div className="description">{selectedVideo.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
