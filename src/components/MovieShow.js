import React from 'react'

const MovieShow = ({ match, movies }) => {
    const movie = movies[match.params.movieId]
    return (
        <div>
            <h3>Movies Show Component!</h3>
            <h1>TITLE: {movie.title}</h1>

        </div>
    )
}

export default MovieShow;
