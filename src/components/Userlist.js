import React from 'react'
import { useSelector } from 'react-redux'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper
} from '@material-ui/core'
import {
  Route, Link
} from 'react-router-dom'
import User from '../components/User'


const Userlist = ( ) => {

  let users = useSelector(state => state.users)

  return (

    <div>
      <h2>Users</h2>
      <TableContainer component={Paper}></TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>blogs created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell key={user.username}><Link to={`/users/${user._id}`}>{user.username}</Link></TableCell>
              <TableCell key={user.username + 'a'}>{user.blogs.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Route path='/users/:id'>
        <User />
      </Route>
    </div>
  )
}

export default Userlist