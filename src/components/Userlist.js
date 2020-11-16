import React, { useReducer, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"

const Userlist = ( ) => {

  let users = useSelector(state => state.user)
  console.log(users)


  return (

    <div>
      <h2>Users</h2>
      <table>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td key={user.username}><Link to={`/users/${user._id}`}>{user.username}</Link></td>
              <td key={user.username + 'a'}>{user.blogs.length}</td>
            </tr>

          ))}
        </tbody>
      </table>

    </div>

  )
}

export default Userlist