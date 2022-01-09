import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import Movie from './Movie'
import Slider from 'react-slick';
import rowSettings from '../rowSettings';

function Row({ title, fetchURL })
{
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false)
    const baseURL = 'https://api.themoviedb.org/3'
    const sliderRef = useRef();
    
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

    const scrollButton = (direction, clickEvent) =>
    {
        //const div = document.getElementById(`${movies[0].id}`);
        //console.log(div);
        return <button className={`scroll-button ${direction}`} onClick={clickEvent}>
                    <i className={`fas fa-chevron-${direction}`} ></i>
                </button>
    }

    function prev()
    {
        sliderRef?.current?.slickPrev()
    }

    function next()
    {
        sliderRef?.current?.slickNext()
    }

    return (
        <div className='row'>
            {renderError()}
     
            {/*title*/}
            <h2>{title}</h2>
            {/*containers --> movies*/}
            <Slider {...rowSettings} className='movie-posters' ref={sliderRef}>
                
                    {/*button scroll right*/}
                     {movies.map(movie =>
                    {
                        return <Movie posterPath={movie.poster_path} alt={Movie.name} id={ movie.id}/>
                    })}
            </Slider>
            {scrollButton('left',prev)}
            {scrollButton('right',next)}
            
        </div>
    )
}

export default Row
