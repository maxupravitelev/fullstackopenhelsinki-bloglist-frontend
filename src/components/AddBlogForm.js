import React, { useState } from "react";
import Togglable from "../components/Togglable"


const AddBlogForm = ({ addBlog }) => {

  const emptyBlogFormField = {
    title: "",
    author: "",
    url: "",
  };

  const [newBlog, setNewBlog] = useState(emptyBlogFormField);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newBlog) return;

    addBlog(newBlog.title, newBlog.author, newBlog.url);

    setNewBlog(emptyBlogFormField);
  };

  const handleBlogFormChange = (event) => {
    let name = event.target.name;

    let newBlogToBeCreated = event.target.value;

    setNewBlog({
      ...newBlog,
      [name]: newBlogToBeCreated,
    });
  };

  return (
    <div>

      <Togglable buttonLabel='new blog'>
        <form onSubmit={handleSubmit}>
          <div>
            title:
            <input
              type="text"
              value={newBlog.title}
              name="title"
              onChange={handleBlogFormChange}
            />
          </div>
          <div>
            author:
            <input
              type="text"
              value={newBlog.author}
              name="author"
              onChange={handleBlogFormChange}
            />
          </div>
          <div>
            url:
            <input
              type="text"
              value={newBlog.url}
              name="url"
              onChange={handleBlogFormChange}
            />
          </div>
          <button type="submit">create</button>
        </form>
        </Togglable>
    </div>
  );
};

export default AddBlogForm;
