import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const NotLoggedIn = props => {
  const {
    component: Component,
    ...rest
  } = props

const userId = localStorage.getItem('userId')

  return (
    <Route
      render={(props) => {
        if (!userId) {
          return <Component {...props} />
        } else {
          return <Redirect to='/' />
        }
      }}
      {...rest}
    />
  )
}

const msp = state => {
  const {
    loading
  } = state.users

  return {
    loading
  }
}

export default connect(msp)(NotLoggedIn)
