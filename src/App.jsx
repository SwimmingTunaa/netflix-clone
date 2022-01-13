import React, {useState} from 'react';
import './App.scss';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request'
import NavBar from './components/NavBar';

function App()
{
  const [selectedRow, setSelectedRow] = useState(false);

  return (
    <div className="App" >
      <NavBar/>
      <Banner fetchURL={requests.fetchNetflixOriginals} />
      <main style={{transform: 'translateY(-20vh)'}}>
        <Row
          title="Netflix Originals"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          mediaType='tv'
          fetchURL={requests.fetchNetflixOriginals}
        />
        <Row
          title="Trending"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          mediaType='movie'
          fetchURL={requests.fetchTrending}
        />
        <Row
          title="Action"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          mediaType='movie'
          fetchURL={requests.fetchActionMovies}
        />
        <Row
          title="Comedy"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          mediaType='movie'
          fetchURL={requests.fetchComedyMovies}
        />
        <Row
          title="Documentaries"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          mediaType='movie'
          fetchURL={requests.fetchDocumentaries}
        />
        <Row
          title="Horror"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          mediaType='movie'
          fetchURL={requests.fetchHorrorMovies}
        />
        <Row
          title="Romance"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          mediaType='movie'
          fetchURL={requests.fetchRomanceMovies}
        />
      </main>
    </div>
  );
}

export default App;
