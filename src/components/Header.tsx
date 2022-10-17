import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SinglePage from './components/watch/SinglePage'
import Header from './components/header/Header'
import HomePage from './pages/Home/HomePage'

export function App() {
    return (
        <div>
            <Router>
                <Header />
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/singlepage/:id' component={SinglePage} exact />
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/singlepage/:id' component={SinglePage} exact/>
                </Switch>
                <Footer />
                <Footer/>
            </Router>
        </div>)}