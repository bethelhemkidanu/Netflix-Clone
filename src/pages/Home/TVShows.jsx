import React from 'react'
import Row from '../../components/Rows/Row/Row'
import requests from '../../utils/requests';
const TVShows = () => {
  return (
    <div>
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
    </div>
  );
}

export default TVShows;