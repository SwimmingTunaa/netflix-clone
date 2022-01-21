import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Movie = ({setCurrentMovie, movie, mediaType, handleShowMoreDetails}) =>
{
    const [hover, setHover] = useState(false);
    const [trailerKey, setTralierKey] = useState();

    useEffect(() =>
    {
        const fetchTralier = async () =>
        {
            try
            {
                 const response = await axios(`https://api.themoviedb.org/3/${mediaType}/${movie.id}}/videos?api_key=540e2925e10e3ae187957ed859b39322`)
                if (response.data.results.length <= 0)
                    setTralierKey('');
                else
                    setTralierKey(response.data.results[0].key);
            }
            catch (error)
            {
                console.log(error)
            }
        }
        fetchTralier()
        
    },[mediaType, movie.id])
  
    function toggleHover()
    {
      setHover(!hover)          
    }

    async function handleClick()
    {
        if ('trailerKey' in movie === false)
        {
            let details = Object.assign(movie, { trailerKey: trailerKey })
            setCurrentMovie(details);
        }
        handleShowMoreDetails()
    }

    const MoreDetailsButton = () =>
    {
        return (
            <button className='more-details-button' style={{opacity: hover ? .5 : 0}}>
                    <i className={`fas fa-chevron-circle-down`} ></i>
            </button>
        )    
    }


    return (
        <div onClick={handleClick} className='movie' key={movie.id} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <img className='poster'  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <MoreDetailsButton />
        </div>
    )
}

export default Movie
