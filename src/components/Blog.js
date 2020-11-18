import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

import {
  useParams
} from 'react-router-dom'

import { setNotification } from '../reducers/notificationReducer'
import { like, remove } from '../reducers/blogReducer'

const Blog = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const id = useParams().id

  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.user)

  const blog = blogs.find(blog => blog.id === id)

  const index = blogs.findIndex(blog => blog.id === id)

  const addLike = () => {
    dispatch(like(blogs[index]))

    dispatch(setNotification(`you voted '${blogs[index].title}'`, 2, 'green'))
  }

  const removeBlog = () => {
    dispatch(setNotification(`you deleted ${blogs[index].title}`, 2, 'green'))
    dispatch(remove(blogs[index], user.id, index))

    history.push('/blogs')
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p />

      {blog.likes} <button onClick={() => addLike()}>like</button>
      <p />
      Added by {blog.lauthor}
      <button onClick={() => removeBlog()}>delete</button>
    </div>
  )
}

export default Blog
