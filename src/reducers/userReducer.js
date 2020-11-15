const userReducer = (state = '', action) => {
  console.log(state)
  console.log(action)

  switch (action.type) {
  case 'USERNAME':
    return action.username
  case 'PASSWORD':
    return action.password
  default:
    return state
  }
}

export default userReducer