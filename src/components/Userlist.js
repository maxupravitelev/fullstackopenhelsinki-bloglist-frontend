import React from 'react'

import { useSelector } from 'react-redux'

import {
  Route, Link
} from 'react-router-dom'

import User from '../components/User'

const Userlist = ( ) => {

  let users = useSelector(state => state.users)


  return (

    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td key={user.username}><Link to={`/users/${user._id}`}>{user.username}</Link></td>
              <td key={user.username + 'a'}>{user.blogs.length}</td>
            </tr>

          ))}
        </tbody>
      </table>
      <Route path='/users/:id'>
        <User />
      </Route>
    </div>

  )
}

export default Userlist