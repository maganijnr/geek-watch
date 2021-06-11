import React, { useState } from 'react'
import {GlobalStyles} from './GlobalStyles'

//ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Componets
import Header from './components/Header'
import Sidebar from './components/Sidebar'

//Pages
import Homepage from './pages/Homepage'
import MoviePage from './pages/MoviePage'


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => setIsOpen(!isOpen)
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header toggleNav={toggleNav}/>
      <Sidebar toggleNav={toggleNav} isOpen={isOpen}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/movie/:id" component={MoviePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

