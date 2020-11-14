
import React, { useState } from 'react'
// import blogService from '../services/blogs'

import { useDispatch, useSelector } from 'react-redux'


const Blog = ({ blog, addLike, removeBlog, index }) => {
  const [blogExpanded, setBlogExpanded] = useState(false)

  // const dispatch = useDispatch()




  const handleViewClick = () => {
    setBlogExpanded(!blogExpanded)
  }

  if (blogExpanded === true) {
    return (
      <div className='blog'>
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
      <div className='blog'>
        {blog.title} {blog.author}
        <br />
        <button onClick={handleViewClick}>view</button>
      </div>
    )
  }
}

export default Blog
