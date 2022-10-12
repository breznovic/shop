import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './pages/Home/HomePage'
import Footer from './components/footer/Footer'
import SinglePage from "./components/watch/SinglePage"

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/singlepage/:id' component={SinglePage} exact/>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}

export default App
