import React from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import Banner from "./Component/Banner/Banner";
import requests from "./GetRequest/Request";
import Row from "./Component/Row/Row";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documetaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
