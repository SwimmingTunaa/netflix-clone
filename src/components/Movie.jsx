import React from 'react'

const Movie = ({posterPath, id}) => {
    return (
       <div className='movie'>
            <img  id={id} src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="" />
        </div>
    )
}

export default Movie
