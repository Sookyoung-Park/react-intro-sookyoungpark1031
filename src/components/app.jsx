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
    });
  };

  useEffect(() => {
    search('pixar');
  }, []);

  youtubeSearch('pixar').then((result) => {
    setVideos(result);
    setSelected(result[0]);
    console.log(result);
  });

  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  // render it after SearchBar
    <VideoDetail video={selectedVideo} />;
    // finally selectedVideo comes into play!

    return (
      <div>
        <SearchBar onSearchChange={search} />;
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />;
        <li onClick={() => props.onVideoSelect(props.video)} />;
        <VideoListItem key={videos.etag} video={videos} onVideoSelect={props.onVideoSelect} />;

      </div>
    );
}

export default App;
