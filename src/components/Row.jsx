import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import Movie from './Movie'
import Slider from 'react-slick';
import rowSettings from '../rowSettings';
import YouTube from 'react-youtube'; 


function Row({ title, fetchURL, mediaType, selectedRow, setSelectedRow })
{
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState({});
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const baseURL = 'https://api.themoviedb.org/3'
    const sliderRef = useRef();
    const opts = {
     
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1
      },
    }

    useEffect(() => {
        const fetchData = async () =>
        {
            setIsLoading(true)
            setError(false);
            try {
                const response = await axios(`${baseURL}${fetchURL}`)
                setMovies(response.data.results)
            } catch (error) {
                setError(true)
                setTimeout(() => setError(false), 3000)
            }
        }
        fetchData();
         setIsLoading(false)                

        return () => 
        {
            useRef.current = null;    
        }
    }, [fetchURL])

    const renderError = () =>
    {
        if (error)
        {
            return (
                <div className='alert alert-danger alert-dismissable fade show' role="alert">Unable to load Movies, please try again in a few minutes</div>
            )
        }
    }

    const handleShowMoreDetails = () =>
    {
        setSelectedRow('')
        setSelectedRow(title)
    }

    const ShowMoreDetails = () =>
    {
        return (
            <span
                className={`d-flex details-container ${selectedRow === title && 'open'}`} 
                style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}")` }}
            >
                <span className='details-content'>
                    <h1>{mediaType === 'movie' ? currentMovie.title : currentMovie.name}</h1>
                    <p>
                        {currentMovie.overview}
                    </p>
                </span>
                {currentMovie.trailerKey && <YouTube
                   className='tralier'
                    videoId={currentMovie.trailerKey}
                    opts={opts}
                >
                </YouTube>}

                {/* close button*/}
                <button onClick={() => setSelectedRow('')}>
                    <i className="far fa-times-circle"></i>
                </button>
            </span>
        )    
    }
    const ShowLoading = () =>
    {
        return isLoading ? <div>loading</div> : null
    }

    const RenderRow = () =>
    {
        <ShowLoading /> 
        return <React.Fragment>
              <h2>{title}</h2>
            {/*containers --> movies*/}

            <Slider {...rowSettings} className='movie-posters' ref={sliderRef}>
                    {movies.map(movie =>
                    {
                        return (
                            <Movie
                                handleShowMoreDetails={handleShowMoreDetails}
                                mediaType={mediaType}
                                setCurrentMovie={setCurrentMovie}
                                movie={movie}
                                key={movie.id}
                            /> 
                        )
                    })}
            </Slider>
        </React.Fragment>
    }

    return (
        <div className='row'>
            <RenderRow/>
            {renderError()}                        
            {selectedRow === title && <ShowMoreDetails/>}
        </div>
    )
}

export default Row
