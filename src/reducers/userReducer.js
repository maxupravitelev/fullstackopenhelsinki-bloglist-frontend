import loginService from '../services/login'
import blogService from '../services/blogs'


const userReducer = (state = 'init', action) => {
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
  case 'SET_FROM_LOCAL':
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
    // console.log(credentials)
    const user = await loginService.login(credentials)
    console.log(user)
    window.localStorage.setItem(
      'loggedBlogAppUser', JSON.stringify(user)
    )
    blogService.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const setUser = (user) => {
  return async dispatch => {
    console.log(user)

    dispatch({
      type: 'SET_FROM_LOCAL',
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