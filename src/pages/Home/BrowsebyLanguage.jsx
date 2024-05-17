import React from 'react'
import Row from "../../components/Rows/Row/Row";
import requests from "../../utils/requests";
const BrowsebyLanguage = () => {
  return (
    <div>
      <h3>Browse by Language </h3>
      <Row  fetchUrl={requests.fetchTrending} />
      <Row  fetchUrl={requests.fetchTopRatedMovies} />
      <Row  fetchUrl={requests.fetchActionMovies} />
      <Row  fetchUrl={requests.fetchComedyMovies} />
      <Row  fetchUrl={requests.fetchHorrorMovies} />
      <Row  fetchUrl={requests.fetchRomanceMovies} />
      <Row  fetchUrl={requests.fetchTvShow} />
      <Row  fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default BrowsebyLanguage