import React, { useState } from 'react'
// import blogService from '../services/blogs'

import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../reducers/notificationReducer'
import { like, remove } from '../reducers/blogReducer'

import Blog from '../components/Blog'




const Bloglist = ({ user }) => {

  const dispatch = useDispatch()

  const blogs = useSelector(state => state.blogs)

  console.log(blogs)

  const addLike = (index) => {
    console.log(blogs[index])
    dispatch(like(blogs[index]))

    dispatch(setNotification(`you voted '${blogs[index].content}'`, 2, 'green'))

  }

  const removeBlog = (index) => {
    console.log(user)
    dispatch(remove(blogs[index], user.id, index))

    dispatch(setNotification(`you deleted '${blogs[index].content}'`, 2, 'green'))

  }

  return (

    <div>
      <h2>blogs</h2>
      {blogs.map((blog, index) => (
        <Blog key={blog.id} blog={blog} addLike={addLike} index={index} removeBlog={removeBlog}/>
      ))}
    </div>

  )
}

export default Bloglist