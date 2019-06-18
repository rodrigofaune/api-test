import React from 'react'
import CharactersContainer from '../../containers/CharactersContainer'
import { Link } from 'react-router-dom'

const CharactersPage = () => {
  return (
    <div>
      <Link to='/'>Ir a Home</Link>
      <Link to='/episodes' >Ver Epidios</Link>
      <Link to='/comparisons' >Comparaciones</Link>
      <CharactersContainer />
    </div>
  )
}

export default CharactersPage
