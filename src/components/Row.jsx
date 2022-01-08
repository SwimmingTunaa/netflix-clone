import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Movie from './Movie'

function Row({ title, fetchURL })
{
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false)
    const baseURL = 'https://api.themoviedb.org/3'

    useEffect(() => {
        const fetchData = async () =>
        {
            setError(false);
            try {
                const res = await axios(`${baseURL}${fetchURL}`);
                setMovies(res.data.results);
                
            } catch (error) {
                setError(true)
                setTimeout(() => setError(false), 3000)
            }

        }
        fetchData();
    }, [fetchURL])

    console.log(movies)

    const renderError = () =>
    {
        if (error)
        {
            return (
                <div className='alert alert-danger alert-dismissable fade show' role="alert">Unable to load Movies, please try again in a few minutes</div>
            )
        }
    }

    return (
        <div className='row'>
            {renderError()}
            {/*button scroll left*/}

            {/*button scroll right*/}
            
            {/*title*/}
            <h2>{title}</h2>
            {/*containers --> movies*/}
            <div className="movie-posters d-flex">
                {movies.map(movie =>
                {
                    return <Movie posterPath={movie.poster_path} alt={Movie.name} id={ movies.id}/>
                })}
            </div>
        </div>
    )
}

export default Row
