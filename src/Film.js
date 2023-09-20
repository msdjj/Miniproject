import React from 'react'
import { Globalcontext } from './context'
import { NavLink } from 'react-router-dom'

const Film = () => {
    const { movies } = Globalcontext();
    return (
        <>
            <section className='movie-page' >
                <div className='grid grid-4-col'>

                    {movies.map((currentmovie) => {
                    const { imdbID, title, Poster } = currentmovie;
                        return (
                        <NavLink to={`/movies/${imdbID}`} key={imdbID}>
                            <div className='card'>
                                <div className='card-info'>
                                    <h2>{title}</h2>
                                    <img src={Poster} alt={imdbID}/>
                                </div>
                            </div>
                        </NavLink>



                    )})}
                </div>
            </section>
        </>
    )
}

export default Film
