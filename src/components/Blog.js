import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

import {
  useParams
} from 'react-router-dom'

import { setNotification } from '../reducers/notificationReducer'
import { like, remove } from '../reducers/blogReducer'

const Blog = () => {
  // const [blogExpanded, setBlogExpanded] = useState(false)
  const dispatch = useDispatch()

  const history = useHistory()


  // const handleViewClick = () => {
  //   setBlogExpanded(!blogExpanded)
  // }

  // if (blogExpanded === true) {
  //   return (
  //     <div style={blogStyle} className='blog'>
  //       {blog.title} {blog.author}
  //       <br />
  //       {blog.url}
  //       <br />

  //       <p>{blog.likes} likes
  //         <button onClick={() => addLike(index)}>like</button>
  //         <button onClick={() => removeBlog(index)}>delete</button></p>

  //       <button onClick={handleViewClick}>hide</button>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div style={blogStyle} className='blog'>
  //       {blog.title} {blog.author}
  //       <br />
  //       <button onClick={handleViewClick}>view</button>
  //     </div>
  //   )
  // }

  const id = useParams().id

  let blogs = useSelector(state => state.blogs)

  const blog = blogs.find(blog => blog.id === id)

  const index = blogs.findIndex(blog => blog.id === id)

  const user = useSelector(state => state.user)


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
