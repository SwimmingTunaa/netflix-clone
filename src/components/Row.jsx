import React, {useState, useRef} from 'react'
import Movie from './Movie'
import Slider from 'react-slick';
import rowSettings from '../rowSettings';
import YouTube from 'react-youtube'; 
import { useFetchMovies } from '../custom_hooks/fetchMovies.hook';

function Row({ title, fetchURL, mediaType, selectedRow, setSelectedRow })
{
    const [currentMovie, setCurrentMovie] = useState({});
   
    const [movies, error, isLoading] = useFetchMovies(fetchURL, mediaType);

    const sliderRef = useRef();
    const opts = {
        playerVars: {
            autoplay: 1,
            mute: 1
      },
    }

    const renderError = () => error ? <div className='alert alert-danger alert-dismissable fade show' role="alert">Unable to load Movies, please try again in a few minutes</div> : null


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
                   className='trailer'
                    videoId={currentMovie.trailerKey}
                    opts={opts}
                />}

                {/* close button*/}
                <button onClick={() => setSelectedRow('')}>
                    <i className="far fa-times-circle"></i>
                </button>
            </span>
        )    
    }
    const ShowLoading = () => isLoading ? <div>loading</div> : null

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
