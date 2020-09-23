import React, { useState, useRef } from 'react'
import Togglable from '../components/Togglable'


const AddBlogForm = ({ addBlog }) => {

  const emptyBlogFormField = {
    title: '',
    author: '',
    url: '',
  }

  const [newBlog, setNewBlog] = useState(emptyBlogFormField)

  const blogFormRef = useRef()

  const handleSubmit = (event) => {
    blogFormRef.current.toggleVisibility()

    event.preventDefault()

    if (!newBlog) return

    addBlog(newBlog.title, newBlog.author, newBlog.url)

    setNewBlog(emptyBlogFormField)
  }

  const handleBlogFormChange = (event) => {
    let name = event.target.name

    let newBlogToBeCreated = event.target.value

    setNewBlog({
      ...newBlog,
      [name]: newBlogToBeCreated,
    })
  }

  return (
    <div className="formDiv">

      <Togglable buttonLabel='new blog' ref={blogFormRef}>
        <form onSubmit={handleSubmit}>
          <div>
            
            <label htmlFor="title">title</label>
            <input
              id="title"
              type="text"
              value={newBlog.title}
              name="title"
              className="title"
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
  )
}

export default AddBlogForm
