// import React, { useCallback, useEffect } from 'react';

// import debounce from 'lodash.debounce';
// import { useDispatch } from 'react-redux';
// import youtubeSearch from '../services/youtube-api';
// import SearchBar from './search_bar';
// import VideoList from './video_list';
// import VideoDetail from './video_detail';
// import { setVideos } from '../actions';

// function YouTube(props) {
//   const dispatch = useDispatch();

//   const search = (text) => {
//     youtubeSearch(text).then((videos) => {
//       dispatch(setVideos(videos));
//     });
//   };

//   const debouncedSearch = useCallback(debounce(search, 500), []);

//   useEffect(() => {
//     search('pixar');
//   }, []);

//   return (
//     <div>
//       <SearchBar onSearchChange={debouncedSearch} />;
//       <div id="video-section">
//         <VideoDetail />
//         <VideoList />
//       </div>
//     </div>
//   );
// }

// export default YouTube;

import React, { useCallback, useState, useEffect } from 'react';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import youtubeSearch from '../services/youtube-api';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

import { setVideos, selectVideo } from '../actions';

function App(props) {
  const dispatch = useDispatch();
  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      // dispatch(setVideos(result));
      // setSelected(result[0]);
      dispatch(setVideos(result));
      dispatch(selectVideo(result[0]));
      // console.log(result);
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  const handleVideoSelect = useCallback((video) => {
    dispatch(selectVideo(video));
  }, []);

  useEffect(() => {
    search('pixar');
  }, []);

  // useEffect(() => {
  //   console.log(videos);
  // }, [videos]);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />;
      <div id="video-section">
        <VideoList onVideoSelect={(handleVideoSelect)} />
        <VideoDetail />
      </div>

    </div>
  );
}

export default App;
