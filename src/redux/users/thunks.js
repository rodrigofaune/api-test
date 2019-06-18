import {
  loginSuccess,
  loginRequest,
  loginFail
} from './'

const fakeLogin = (email, password, state) => {
  const {
    userList,
    users
  } = state.users

  const userId = userList.find(uId => {
    return (
      users[uId].email === email &&
      users[uId].password === password
    )
  })

  return {
    userId,
    error: !userId && 'Password o email inválido'
  }
}

export const login = ({ email, password }) => async (dispatch, getState) => {
  dispatch(loginRequest())

  const response = fakeLogin(email, password, getState())

  const {
    userId,
    error
  } = response

  if (!error) {
    localStorage.setItem('userId', userId)
    dispatch(loginSuccess())
  } else {
    dispatch(loginFail(error))
  }
}