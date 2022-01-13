import axios from 'axios';
import React, { useState, useEffect } from 'react';
import YoutubeBackground from 'react-youtube-background'

const Banner = ({fetchURL}) =>
{
    const [movie, setMovie] = useState([]);
    const [video, setVideo] = useState(); 
    const opts = {
        autoplay: 1,
        controls: 1
    }

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            const res = await axios(`https://api.themoviedb.org/3${fetchURL}`)
            const movie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
            await axios(`http://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=540e2925e10e3ae187957ed859b39322`).then(t =>
            {
                setVideo(t.data.results[Math.floor(Math.random() * t.data.results.length)].key);
            })
            setMovie(movie);
        }
        fetchData();
    }, []);


    return (
        <header className='banner' >
            <YoutubeBackground 
                videoId={video}
                playerOptions={opts}
                aspectRatio='16:9'
                className='video-banner'
            >
                
            <div className='fade'>
                <div className='banner-content' >
                    {/*title*/}
                    <h1>{movie.name }</h1>
                    {/*desciprtions*/}
                    <p>{movie.overview}</p>
                    <span>
                        {/*play button*/}
                         <button className='play-button' style={{fontWeight: 'bold'}}>
                                <i className="fas fa-play" style={{ color: 'black' }}></i>Play
                        </button>
                        {/*my list button*/}
                        <button className='play-button' style={{fontWeight: 'bold', marginLeft: '2rem'}}>
                               My List
                        </button>
                    </span>
                </div>
            </div>
            </YoutubeBackground >
        </header>
    )
};

export default Banner;
