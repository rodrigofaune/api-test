import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const HomePage = () => {
  return (
    <div>
      <Link to='/characters'>Ver Personajes</Link>
      <Link to='/episodes' >Ver Epidios</Link>
      <Link to='/comparisons' >Comparaciones</Link>
      <Link to='/login'>Salir</Link>
      Bienvenidos al Home
    </div>
  )
}

export default HomePage
