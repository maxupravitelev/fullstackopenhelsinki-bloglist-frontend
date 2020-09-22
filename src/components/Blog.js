import React, { useState } from "react";

const Blog = ({ blog }) => {
  const [blogExpanded, setBlogExpanded] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  

  if (blogExpanded === true) {
    return (
      <div style={blogStyle}>
        {blog.title} {blog.author}
        <br />
        {blog.url}
        <br />
        
        <p>likes
        <button>like</button></p>
        
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
