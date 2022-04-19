import {useState, useEffect, useRef} from 'react'
import axios from 'axios';

export function useFetchMovies(fetchURL)
{
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const baseURL = 'https://api.themoviedb.org/3'

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

    return [movies, error, isLoading]
}