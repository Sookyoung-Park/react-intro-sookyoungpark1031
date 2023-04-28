import React, { useCallback, useState, useEffect } from 'react';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import youtubeSearch from '../services/youtube-api';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import { setVideos } from '../actions';

function YouTube(props) {
  const dispatch = useDispatch();
  //   const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    // youtubeSearch(text).then((result) => {
    //   setVideos(result);
    //   setSelected(result[0]);
    //   console.log(result);
    // });
    youtubeSearch(text).then((videos) => {
      dispatch(setVideos(videos));
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    search('pixar');
  }, []);

  //   youtubeSearch('pixar').then(
  //     console.log(videos),
  //   );

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />;
      {/* <div id="video-section"> */}
      {/* <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} /> */}
      {/* <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} /> */}
      {/* <VideoDetail video={selectedVideo} /> */}
      {/* </div> */}
      {/* <SearchBar onSearchChange={debouncedSearch} /> */}
      <div id="video-section">
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}

export default YouTube;
