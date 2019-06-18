import {
  getCharacterRequest,
  getCharacterSuccess,
  getCharacterError
} from './index'
import axios from 'axios'

export const getCharacters = () => async (dispatch, getState) => {
  dispatch(getCharacterRequest())
  
  const {
    next: url
  } = getState().characters.infoApi

  try {
    const response = await axios.get(url)

    const {
      results,
      info
    } = response.data

    dispatch(getCharacterSuccess({
      info,
      characters: results
    }))
  } catch (error) {
    dispatch(getCharacterError(error))
  }
}
