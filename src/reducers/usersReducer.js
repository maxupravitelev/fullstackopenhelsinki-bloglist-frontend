import userService from '../services/users'

const usersReducer = (state = [], action) => {
  // console.log(state)
  // console.log(action)

  switch (action.type) {
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

export default usersReducer