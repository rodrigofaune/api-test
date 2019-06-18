import { combineReducers } from 'redux'
import charactersReducer from './characters'
import usersReducer from './users'

export default combineReducers({
  characters: charactersReducer,
  users: usersReducer,
})
