import loginService from '../services/login'

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
  case 'LOGOUT':
    return action.data
  default:
    return state
  }
}

export const logoutUser = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT',
      data: null
    })
  }
}


export const loginUser = (credentials) => {
  return async dispatch => {
    console.log(credentials)
    const user = await loginService.login(credentials)
    console.log(user)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

// export const setUsername = username => {
//   return dispatch => {
//     dispatch({
//       type: 'USERNAME',
//       data: username
//     })
//   }
// }

// export const setPassword = password => {
//   return dispatch => {
//     dispatch({
//       type: 'PASSWORD',
//       data: password
//     })
//   }
// }

export default userReducer