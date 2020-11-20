import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import  { useField } from '../hooks/index'

import {
  useParams
} from 'react-router-dom'

import { setNotification } from '../reducers/notificationReducer'
import { like, remove, postComment } from '../reducers/blogReducer'

import {
  TextField, Button, List, ListItem
} from '@material-ui/core'

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

  const comment = useField('comment')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postComment(blog, comment.value))
    comment.onChange({
      target: {
        value: ''
      }
    })
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p />

      Likes: {blog.likes} <Button variant="contained" color="primary" onClick={() => addLike()}>like</Button>
      <p />
      Added by {blog.author}
      <p />
      <Button variant="contained" color="primary" onClick={() => removeBlog()}>delete</Button>
      <h2>comments</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField label="comment" {...comment} />
        </div>
        <Button variant="contained" color="primary">add</Button>
      </form>
      <List>
        {blog.comments.map((comment) => (
          <ListItem key={comment + Math.random()}>■ {comment}</ListItem>
        ))}
      </List>
    </div>
  )
}

export default Blog
