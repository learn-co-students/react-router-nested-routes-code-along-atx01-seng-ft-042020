import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(key => <li> <Link key={key} to={`/movies/${key}`}>{movies[key].title}</Link></li>)
    return (
        <div>
            <ul>
                {
                    renderMovies
                }
            </ul>
        </div>
    )

}

export default MoviesList;