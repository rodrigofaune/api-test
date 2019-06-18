const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'

export const loginSuccess = () =>({ type: LOGIN_SUCCESS })

export const loginRequest = () =>({ type: LOGIN_REQUEST })

export const loginFail = error =>({
  type: LOGIN_FAIL,
  payload: {
    error
  }
})

const initialState = {
  loading: false,
  users: {
    '1': {
      id: '1',
      email: 'rick@rm.com',
      password: '123',
      name: 'Rick'
    },
    '2': {
      id: '2',
      email: 'morty@rm.com',
      password: '123',
      name: 'Mory'
    },
    '3': {
      id: '3',
      email: 'beth@rm.com',
      password: '123',
      name: 'Beth'
    }
  },
  userList: ['1', '2', '3']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null
      }
    }

    case LOGIN_FAIL: {
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
