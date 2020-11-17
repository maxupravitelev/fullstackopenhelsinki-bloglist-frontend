import loginService from '../services/login'
import userService from '../services/users'

const userReducer = (state = [], action) => {
  // console.log(state)
  // console.log(action)

  switch (action.type) {
  case 'USERNAME':
    return action.username
  case 'PASSWORD':
    return action.password
  case 'LOGIN':
    return action.data
  case 'ALL_USERS':
    return action.data
  default:
    return state
  }
}

export const getAllUsers = () => {
  return async dispatch => {
    const allUsers = await userService.getAll()
    // console.log(allUsers)
    dispatch({
      type: 'ALL_USERS',
      data: allUsers
    })
  }
}


export const loginUser = (credentials) => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const setUsername = username => {
  return dispatch => {
    dispatch({
      type: 'USERNAME',
      data: username
    })
  }
}

export const setPassword = password => {
  return dispatch => {
    dispatch({
      type: 'PASSWORD',
      data: password
    })
  }
}

export default userReducer