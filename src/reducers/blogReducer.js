import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch(action.type) {
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'REMOVE_BLOG':
    return state.filter(blog => blog.id !== action.data.id)
  case 'INIT_BLOGS':
    return action.data
  case 'LIKE':
    return state.map(blog => blog.id !== action.data.id ? blog : action.data
    )
  case 'COMMENT':
    return state.map(blog => blog.id !== action.data.id ? blog : action.data
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
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const remove = (blog, userId, index) => {
  return async dispatch => {

    const removedBlog = await blogService.remove(blog, userId)

    const removedBlogIndex = {
      ...blog,
      index
    }

    dispatch({
      type: 'REMOVE_BLOG',
      data: removedBlogIndex
    })
  }
}

export const like = (blog) => {
  return async dispatch => {

    const changedBlog = {
      ...blog,
      likes: blog.likes + 1
    }
    const updatedBlog = await blogService.update(changedBlog)

    dispatch({
      type: 'LIKE',
      data: updatedBlog
    })
  }
}

export const postComment = (blog, newComment) => {
  return async dispatch => {

    const oldComments = blog.comments
    const updatedComments = [...oldComments, newComment]

    const changedBlog = {
      ...blog,
      comments: updatedComments
    }
    const updatedBlog = await blogService.addComment(blog.id, newComment)

    dispatch({
      type: 'COMMENT',
      data: changedBlog
    })
  }
}

export default blogReducer