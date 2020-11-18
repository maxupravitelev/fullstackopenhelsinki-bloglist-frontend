import React from 'react'
// import blogService from '../services/blogs'

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
      {blogs.map((blog) => (
        <p key={blog.id} style={blogStyle}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></p>
      ))}

    </div>

  )
}

export default Bloglist