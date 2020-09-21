import React from 'react'
const Blog = ({ blog }) => (
  <div>
    {blog.title} {blog.author} 
    <br></br>
    {blog.url}
    <br></br>

  </div>
)

export default Blog
