import React, { useState } from "react";
import blogService from "../services/blogs";


const Blog = ({ blog }) => {
  const [blogExpanded, setBlogExpanded] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const addLike = () => {
    
    blog.likes = blog.likes + 1
    blogService.update(blog)
  
  
  }

  if (blogExpanded === true) {
    return (
      <div style={blogStyle}>
        {blog.title} {blog.author}
        <br />
        {blog.url}
        <br />
        
    <p>{blog.likes} likes
        <button onClick={() => addLike(blog)}>like</button></p>
        
        <button onClick={() => setBlogExpanded(false)}>hide</button>
      </div>
    );
  } else {
    return (
      <div style={blogStyle}>
        {blog.title}
        <br />
        <button onClick={() => setBlogExpanded(true)}>view</button>
      </div>
    );
  }
};
export default Blog;
