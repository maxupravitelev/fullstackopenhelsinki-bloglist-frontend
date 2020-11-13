import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'INIT_BLOGS':
    return action.data
  case 'LIKE':
    return state.map(blog =>
      blog.id !== action.data.id ? blog : blog.data
    )
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = content => {
  return async dispatch => {
    const newBlog = await blogService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newBlog
    })
  }
}

export const like = (blog) => {
  return async dispatch => {

    const changedBlog = {
      ...blog,
      likes: blog.likes + 1
    }
    const updatedBlog = await blogService.update(blog.id, changedBlog)

    dispatch({
      type: 'LIKE',
      data: updatedBlog
    })
  }
}

export default blogReducer