import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login as loginCreator } from '../../redux/users/thunks'

const LoginContainer = ({ login, error, loading }) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const changeHandler = e => {
    const {
      name,
      value
    } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    login(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={changeHandler} type="email" name="email" value={values["email"]} />

      <input onChange={changeHandler} type="password" name="password" value={values["password"]} />

      {error}

      {!loading && <button type='submit'>Entrar</button>}
    </form>
  )
}

const mapDispatchToProps = {
  login: loginCreator
}

const mapStateToProps = state => {
  const {
    loading,
    error
  } = state.users

  return {
    loading,
    error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
