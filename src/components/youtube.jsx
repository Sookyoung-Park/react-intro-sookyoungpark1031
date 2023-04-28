import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import youtubeSearch from '../services/youtube-api';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

import { setVideos, selectVideo } from '../actions';

function App() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  const selectedVideo = useSelector((state) => state.selectedVideo);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      dispatch(setVideos(result));
      dispatch(selectVideo(result[0]));
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  const handleVideoSelect = useCallback((video) => {
    dispatch(selectVideo(video));
  }, [dispatch]);

  useEffect(() => {
    search('pixar');
  }, [search]);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />
      <div id="video-section">
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
        <VideoDetail video={selectedVideo} />
      </div>
    </div>
  );
}

export default App;
