import React, { useReducer, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'


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
        {users.map((user, index) => (
          <tr key={index}>
            <td key={user.username}>{user.username}</td>
            {/* <td key={user.username + 'a'}>{user.articles}</td> */}
          </tr>
        ))}
      </table>

    </div>

  )
}

export default Userlist