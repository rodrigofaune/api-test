import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import CharactersPage from './pages/CharactersPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import NotLoggedInRoute from './components/NotLoggedInRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/' exact component={HomePage} />
        <PrivateRoute path='/characters' exact component={CharactersPage} />
        <NotLoggedInRoute path='/login' exact component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default Routes
