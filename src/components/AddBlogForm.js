import React, { useState, useRef } from 'react'
import Togglable from '../components/Togglable'

import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogReducer'


const AddBlogForm = () => {
  const dispatch = useDispatch()

  const emptyBlogFormField = {
    title: '',
    author: '',
    url: '',
  }

  const [newBlog, setNewBlog] = useState(emptyBlogFormField)

  const blogFormRef = useRef()

  const handleSubmit = (event) => {

    event.preventDefault()

    const title = event.target.title.value
    const author = event.target.author.value
    const url = event.target.url.value

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''

    const content = {
      title,
      author,
      url
    }

    dispatch(createBlog(newBlog))

    dispatch(setNotification(`"${content.title}" added`, 3, 'green'))

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
