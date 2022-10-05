import React, {useEffect, useState} from "react"
import './MovieList.css'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className='movie__list'>
            <h2 className='list__title'>{(type ? type : 'popular').toUpperCase()}</h2>
            <div className='list__cards'>
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList