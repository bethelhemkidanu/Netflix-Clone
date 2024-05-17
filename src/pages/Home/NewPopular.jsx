import React from 'react'
import Row from "../../components/Rows/Row/Row";
import requests from "../../utils/requests";
const NewPopular = () => {
  return (
    <div>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default NewPopular