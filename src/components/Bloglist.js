import React from 'react'
// import blogService from '../services/blogs'

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'

import { useSelector } from 'react-redux'

import {
  Link
} from 'react-router-dom'


const Bloglist = () => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  let blogs = useSelector(state => state.blogs)

  blogs.sort((b, a) => a.likes - b.likes)

  return (

    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </TableCell>
                <TableCell>
                  {blog.author}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )
}

export default Bloglist