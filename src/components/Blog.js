import React, { useState } from 'react'
// import blogService from '../services/blogs'


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

export default Blog
