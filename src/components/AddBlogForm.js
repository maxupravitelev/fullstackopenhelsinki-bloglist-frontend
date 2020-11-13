import React, { useState, useRef } from 'react'
import Togglable from '../components/Togglable'

import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const AddBlogForm = ({ addBlog }) => {
  const dispatch = useDispatch()

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
    dispatch(setNotification(`"${newBlog.title}" added`))
    // setTimeout(() => {
    //   dispatch(setNotification(null))
    // }, 2000)
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
            title:
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
              id="author"
              type="text"
              value={newBlog.author}
              name="author"
              onChange={handleBlogFormChange}
            />
          </div>
          <div>
            url:
            <input
              id="url"
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
