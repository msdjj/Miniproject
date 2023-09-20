import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import './App.css';
import SingleFilm from './singlefilm';
import Error from './Error';
import { AppProvider } from './context';
function App() {
  return (
    <div>
      <Router>
        <AppProvider>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/movies/:id' Component={SingleFilm}/>
          <Route path='*' Component={Error}/>
        </Routes>
        </AppProvider>
      </Router>
    </div>
  )
}

export default App
