import React from 'react';
import { useSelector } from 'react-redux';
import VideoListItem from './video_list_item';

function VideoList(props) {
  // const videos = useSelector((state) => (state.video.list));

  // const videoItems = props.videos.map((videos) => {
  //   return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />;
  // });

  // const video = useSelector((reduxState) => reduxState.video.selected);

  const { videos } = props;

  // let videoIt;

  const videoItems = videos.map((video) => (
    <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={props.onVideoSelect}
    />
  ));

  return (
    <ul>
      {videoItems}
    </ul>
  );
}

export default VideoList;
