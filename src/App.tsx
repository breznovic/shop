import React from 'react'
import './App.css'
import Header from './components/header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import MovieList from './components/movieList/MovieList'

function App() {
    return <div className='App'>
        <Router>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}></Route>
                <Route path='movie/:id' element={<Movie/>}></Route>
                <Route path='movies/:type' element={<MovieList/>}></Route>
                <Route path='/*' element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
}

export default App
