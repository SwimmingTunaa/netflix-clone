import React from 'react';
import './App.scss';
import Row from './components/Row';
import requests from './request'

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;
