import React, { useEffect, useState } from 'react';
import './style.css';
import { connect } from 'react-redux'
import { getCharacters as getCharactersCreator } from '../../redux/characters/thunks'

const CharactersContainer = props => {
  const {
    characters,
    loading,
    error,
    pages,
    currentPage,
    count,
    getCharacters
  } = props

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className="App App-header">
      {loading && 'Loading.....'}
      <div>Hay {count} elementos.</div>
      {characters.map((character, index) => (
        <div key={index}>
          {character.name}
          <img style={{height: '100px'}} src={character.image} alt=""/>
        </div>
      ))}
      <div>Hay {pages} páginas, estás en la página {currentPage} </div>
      {(!loading && currentPage < pages) && <button onClick={getCharacters}>Ver más</button>}
    </div>
  );
}

const mapStateToProps = state => {
  const {
    characters,
    loading,
    error,
    infoApi
  } = state.characters

  const {
    count,
    currentPage,
    pages
  } = infoApi

  return {
    characters,
    loading,
    error,
    count,
    currentPage,
    pages
  }
}

const mapDispatchToProps = {
  getCharacters: getCharactersCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)
