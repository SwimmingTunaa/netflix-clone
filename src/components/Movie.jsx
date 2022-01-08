import React from 'react'

const Movie = ({posterPath, id}) => {
    return (
            <img  className='movie' id={id} src={`https://image.tmdb.org/t/p/w200/${posterPath}`} alt="" />
    )
}

export default Movie
