import React, { useReducer, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from 'react-router-dom'

const User = ( ) => {
  const id = useParams().id
  let users = useSelector(state => state.user)
  const user = users.find(user => user.id === id)

  if (!user) {
    return null
  }

  return (
    <Switch>
    <Route path="/users/:id">
    <div>

      <h2>{user.username}</h2>

          
          {user.blogs.map((user) => (
            <li key={user.blogs.title + user.blogs.username}>
              {user.blogs.title}
            </li>

          ))}

    </div>
    </Route>
    </Switch>

  )
}

export default User