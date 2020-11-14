
import React, { useState } from 'react'
// import blogService from '../services/blogs'

import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../reducers/notificationReducer'
import { like } from '../reducers/blogReducer'


const Blog = ({ blog, addLike, index, removeBlog }) => {
  const [blogExpanded, setBlogExpanded] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleViewClick = () => {
    setBlogExpanded(!blogExpanded)
  }

  if (blogExpanded === true) {
    return (
      <div style={blogStyle} className='blog'>
        {blog.title} {blog.author}
        <br />
        {blog.url}
        <br />

        <p>{blog.likes} likes
          <button onClick={() => addLike(index)}>like</button>
          <button onClick={() => removeBlog(index)}>delete</button></p>

        <button onClick={handleViewClick}>hide</button>
      </div>
    )
  } else {
    return (
      <div style={blogStyle} className='blog'>
        {blog.title} {blog.author}
        <br />
        <button onClick={handleViewClick}>view</button>
      </div>
    )
  }
}

const Bloglist = () => {

  const dispatch = useDispatch()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const blogs = useSelector(state => state.blogs)

  console.log(blogs)

  const addLike = (blog) => {
    dispatch(like(blog))

    dispatch(setNotification(`you voted '${blog.content}'`, 2, 'green'))

  }

  const removeBlog = () => {
    //
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