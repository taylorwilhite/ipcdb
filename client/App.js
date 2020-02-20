import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Podcasts from './components/Podcasts'
import Episodes from './components/Episodes'

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path='/podcasts'>
          <Podcasts />
        </Route>
        <Route path='/episodes'>
          <Episodes />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
