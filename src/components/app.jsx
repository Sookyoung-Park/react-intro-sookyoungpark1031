import React, { useState, useEffect } from 'react';

// import our new SearchBar componenbtㄴ
import youtubeSearch from '../services/youtube-api';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoListItem from './video_list_item';
import VideoDetail from './video_detail';

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

  useEffect(() => {
    search('pixar');
  }, []);

  return (
    <div>
      <SearchBar onSearchChange={search} />;

      <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />;

      <VideoDetail video={selectedVideo} />;
    </div>
  );
}

export default App;
