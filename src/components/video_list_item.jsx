import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { selectVideo } from '../actions';

function VideoListItem(props) {
  const dispatch = useDispatch();
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    // <li onClick={() => props.onVideoSelect(props.video)}>
    <li onClick={() => dispatch(selectVideo(props.video))}>
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

// export default VideoListItem;
export default connect(mapStateToProps, { selectVideo })(VideoListItem);
