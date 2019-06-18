const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST'
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR'

export const getCharacterRequest = () => ({ type: GET_CHARACTERS_REQUEST })

export const getCharacterSuccess = response => {
  const {
    info,
    characters
  } = response

  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: {
      info,
      characters
    }
  }
}

export const getCharacterError = error => ({
  type: GET_CHARACTERS_ERROR,
  payload: {
    error
  }
})

const initialState = {
  infoApi: {
    count: 0,
    pages: 0,
    next: 'https://rickandmortyapi.com/api/character/',
    prev: '',
    currentPage: 0
  },
  characters: [],
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }

    case GET_CHARACTERS_SUCCESS: {
      const { characters, info } = action.payload

      const {
        pages,
        next,
        prev,
        count
      } = info

      return {
        ...state,
        infoApi: {
          ...state.infoApi,
          pages,
          next,
          prev,
          count,
          currentPage: state.infoApi.currentPage + 1
        },
        loading: false,
        characters: [...state.characters, ...characters],
        error: null
      }
    }

    case GET_CHARACTERS_ERROR: {
      const { error } = action.payload

      return {
        ...state,
        loading: false,
        error
      }
    }

    default: return state
  }
} 
