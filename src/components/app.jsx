import React, { useCallback, useState, useEffect } from 'react';

import debounce from 'lodash.debounce';
import youtubeSearch from '../services/youtube-api';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YouTube from './youtube';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
      console.log(result);
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    search('pixar');
  }, []);

  // youtubeSearch('pixar').then(
  //   console.log(videos),
  // );
  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />;
      <div id="video-section">
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
        <VideoDetail video={selectedVideo} />
      </div>

    </div>
  );
}

export default App;
