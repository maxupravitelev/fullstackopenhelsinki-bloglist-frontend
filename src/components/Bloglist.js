import React from 'react'
// import blogService from '../services/blogs'

import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../reducers/notificationReducer'
import { like, remove } from '../reducers/blogReducer'

import Blog from '../components/Blog'

import {
  Route, Link
} from 'react-router-dom'


const Bloglist = ({ user }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }
  
  const dispatch = useDispatch()

  let blogs = useSelector(state => state.blogs)

  blogs.sort((b, a) => a.likes - b.likes)

  const addLike = (index) => {
    console.log(blogs[index])
    dispatch(like(blogs[index]))

    dispatch(setNotification(`you voted '${blogs[index].title}'`, 2, 'green'))

  }

  const removeBlog = (index) => {
    console.log(user)

    dispatch(setNotification(`you deleted ${blogs[index].title}`, 2, 'green'))
    dispatch(remove(blogs[index], user.id, index))

  }

  return (

    <div>
      <h2>blogs</h2>
      {blogs.map((blog, index) => (
        <p key={blog.id} style={blogStyle}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></p>
        // <Blog key={blog.id} blog={blog} addLike={addLike} index={index} removeBlog={removeBlog}/>
      ))}

    </div>

  )
}

export default Bloglist