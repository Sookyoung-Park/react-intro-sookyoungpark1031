import React, { useState } from 'react';

function SearchBar(props) {
  const [searchterm, setSearchTerm] = useState('');

  /* onInputChange는 검색 바의 입력 값이 변경될 때마다 호출
console.log로 검색어를 출력
setSearchTerm을 사용하여 searchterm state 변수를 업데이트합니다.
props.onSearchChange 함수를 호출하여, 검색어가 변경됨을 알립니다. */
  const onInputChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchterm} />

    </div>
  );
}

export default SearchBar;
