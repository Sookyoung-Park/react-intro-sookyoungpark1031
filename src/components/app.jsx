import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import youtubeSearch from '../services/youtube-api';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import { setVideos, selectVideo } from '../actions';

function App() {
  const dispatch = useDispatch();

  const search = useCallback((text) => {
    youtubeSearch(text).then((result) => {
      dispatch(setVideos(result));
      dispatch(selectVideo(result[0]));
    });
  }, [dispatch]);

  const debouncedSearch = useCallback(debounce(search, 500), [search]);

  useEffect(() => {
    search('pixar');
  }, [search]);

  const handleVideoSelect = useCallback((video) => {
    dispatch(selectVideo(video));
  }, [dispatch]);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />
      <div id="video-section">
        <VideoList onVideoSelect={(handleVideoSelect)} />
        <VideoDetail video={selectVideo} />
      </div>
    </div>
  );
}

export default App;
