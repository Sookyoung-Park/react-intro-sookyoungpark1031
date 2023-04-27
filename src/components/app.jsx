import React, { useCallback, useState, useEffect } from 'react';

// import our new SearchBar componenbtㄴ
import debounce from 'lodash.debounce';
import youtubeSearch from '../services/youtube-api';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function App(props) {
  /*
  위 코드는 React 함수형 컴포넌트인 App을 정의하고, 함수의 파라미터로 props를 전달
  그 다음으로, React Hook인 useState를 두 번 사용하여 videos와 selectedVideo 두 가지 상태값을 관리

  useState는 함수형 컴포넌트에서 상태값을 추가하고 관리하기 위해 사용되며, 첫 번째 인자는 해당 상태값의 초기값을 설정하고, 두 번째 인자는 해당 상태값을 갱신하기 위한 함수를 반환합니다.
  여기서 useState를 사용하여 videos와 setVideos를 선언한 것은 videos라는 이름의 상태값과, 이 값을 갱신하기 위한 함수인 setVideos를 생성. selectedVideo와 setSelected에 대해서도 동일
  즉, useState를 사용하여 videos와 selectedVideo 두 가지 상태값을 선언하고, 초기값은 각각 빈 배열과 null로 설정된 것.
  */
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  /*
  위 코드는 search라는 함수를 정의하고, text라는 문자열 인자를 받습니다.
  search 함수 내부에서는 youtubeSearch라는 비동기 함수를 호출 +
  result라는 변수에 비동기 함수의 결과값을 할당 */
  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
      console.log(result);
    });
  };

  /* debounce 함수는 일정 시간동안 중복 호출되는 함수를 제어하는 기능을 가진 함수
  이를 이용하면, 사용자가 입력하는 검색어와 같은 함수를 빈번하게 호출하는 상황에서도 불필요한 API 호출을 최소화하고, 성능을 개선할 수 있습니다.
  useCallback은 React Hook으로, 함수를 캐싱하여 메모이제이션하고, 이전에 생성된 함수를 재사용할 수 있도록 합니다.
  따라서, debouncedSearch는 search 함수를 debounce한 버전의 함수이며, search 함수가 새로운 값을 받을 때마다 새로 생성되는 것이 아니라, 이전에 생성된 함수를 재사용합니다.
*/
  const debouncedSearch = useCallback(debounce(search, 500), []);

  /* useEffect는 React 컴포넌트가 렌더링되고 난 후에 실행되는 함수
  이를 이용하여 컴포넌트가 처음 로드될 때 API를 호출하고 초기 검색어 'pixar'로 비디오 리스트를 가져옵니다.
여기서 첫 번째 매개변수로 전달된 함수는 search('pixar')입니다. 이 함수는 search 함수를 호출하여 'pixar'라는 검색어로 YouTube API를 호출하고 비디오 리스트를 가져옵니다.
두 번째 매개변수로 전달된 빈 배열 []은 useEffect가 실행될 때의 의존성 배열입니다. 이 배열은 useEffect가 의존하는 변수가 있을 경우 해당 변수를 포함해주어야 합니다. 만약 의존하는 변수가 없으면 빈 배열로 설정하여 해당 useEffect는 최초 한 번만 실행되고, 이후 다시 실행되지 않습니다.
따라서, 이 코드는 컴포넌트가 최초로 로드될 때 한 번만 search 함수를 호출하여 초기 검색어 'pixar'로 비디오 리스트를 가져오게 됩니다.
*/
  useEffect(() => {
    search('pixar');
  }, []);

  youtubeSearch('pixar').then(
    console.log(videos),
  );

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
