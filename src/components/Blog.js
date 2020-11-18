import React from 'react'

import { useSelector } from 'react-redux'

import {
  useParams
} from 'react-router-dom'

const Blog = ({ addLike, index, removeBlog }) => {
  // const [blogExpanded, setBlogExpanded] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  // const handleViewClick = () => {
  //   setBlogExpanded(!blogExpanded)
  // }

  // if (blogExpanded === true) {
  //   return (
  //     <div style={blogStyle} className='blog'>
  //       {blog.title} {blog.author}
  //       <br />
  //       {blog.url}
  //       <br />

  //       <p>{blog.likes} likes
  //         <button onClick={() => addLike(index)}>like</button>
  //         <button onClick={() => removeBlog(index)}>delete</button></p>

  //       <button onClick={handleViewClick}>hide</button>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div style={blogStyle} className='blog'>
  //       {blog.title} {blog.author}
  //       <br />
  //       <button onClick={handleViewClick}>view</button>
  //     </div>
  //   )
  // }

  const id = useParams().id
  let blogs = useSelector(state => state.blogs)
  const blog = blogs.find(blog => blog._id === id)

  // if (!user) {
  //   return null
  // }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p />
      
      {blog.likes}
      <p />
      Added by {blog.lauthor}
      
    </div>
  )
}

export default Blog
