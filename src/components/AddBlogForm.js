import React, { useState } from "react";

const AddBlogForm = ({ addBlog }) => {

    const emptyBlogFormField = {
      title: '',
      author: '',
      url: ''
    }
  
    const [newBlog, setNewBlog] = useState(emptyBlogFormField)

    const handleSubmit = (event) => {
      event.preventDefault();

      if (!newBlog) return;

      addBlog(newBlog.title, newBlog.author, newBlog.url)

      setNewBlog(emptyBlogFormField)
    }

    const handleBlogFormChange = (event) => {
        let name = event.target.name;
  
        let newBlogToBeCreated = event.target.value;
  
        setNewBlog({
          ...newBlog,
          [name]: newBlogToBeCreated
        })
      } 


return (

    <div>


      <form onSubmit={handleSubmit}>
        
      <div>
        title:
        <input
          type="text"
          value={newBlog.title}
          name="title"
          // onChange={({ target }) => setNewBlog(target.value)}
          onChange={handleBlogFormChange}
    />
      </div>
      <div>
        author:
        <input
          type="text"
          value={newBlog.author}
          name="author"
          // onChange={({ target }) => setNewBlog(target.value)}
          onChange={handleBlogFormChange}

        />
      </div>
      <div>
        url:
        <input
          type="text"
          value={newBlog.url}
          name="url"
          // onChange={({ target }) => setNewBlog(target.value)}
          onChange={handleBlogFormChange}

        />
      </div>
        <button type="submit">create</button>
      </form>
    </div>

)


}

export default AddBlogForm