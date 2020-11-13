import React, { useState, useEffect } from 'react'

import AddBlogForm from './components/AddBlogForm'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'

import blogService from './services/blogs'
import loginService from './services/login'



const App = () => {

  const [blogs, setBlogs] = useState([])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)
  const [messageColor, setMessageColor] = useState('red')

  const notificationStyle = {
    color: messageColor,
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }


  useEffect(() => {
    const getBlogs = async () => {
      let initBlogs = await blogService.getAll()

      initBlogs.sort((b, a) => a.likes - b.likes)

      setBlogs(initBlogs)
    }

    getBlogs()

  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, []) // "The empty array as the parameter of the effect ensures that the effect is executed only when the component is rendered for the first time."

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')

      setMessageColor('green')
      setErrorMessage(`'${user.username}' logged in`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    } catch (exception) {
      setMessageColor('red')
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }


  const addBlog = async (title, author, url) => {

    const newBlog = { title, author, url, likes: 0}

    await blogService.create(newBlog)

    const newBlogList = await blogService.getAll()

    console.log(newBlogList)

    setMessageColor('green')
    setErrorMessage(`'${newBlog.title}' by '${newBlog.author}' added`)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)

    setBlogs(newBlogList)

  }

  const loginForm = () => {
    // const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    // const showWhenVisible = { display: loginVisible ? '' : 'none' }

    return (
      <div>
        <div>
          <Notification />

          {/* <Notification message={errorMessage} styleMessage={notificationStyle} /> */}
          <Togglable buttonLabel='login'>
            <LoginForm
              username={username}
              password={password}
              handleUsernameChange={({ target }) => setUsername(target.value)}
              handlePasswordChange={({ target }) => setPassword(target.value)}
              handleLogin={handleLogin}
            />
          </Togglable>
        </div>
      </div>
    )
  }

  const addLike = (index) => {

    const newBlogs = [...blogs]

    newBlogs[index].likes = newBlogs[index].likes + 1

    blogService.update(newBlogs[index])

    setBlogs(newBlogs)
    // Source for handling re-rendering of compontent after removal: https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks

  }

  const removeBlog = (index) => {
    const newBlogs = [...blogs]

    newBlogs.splice(index, 1)


    blogService.remove(blogs[index]['id'], user.id)

    setMessageColor('green')
    setErrorMessage(`'${blogs[index]['title']}' by removed`)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)

    setBlogs(newBlogs)
    // Source for handling re-rendering of compontent after removal: https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
  }


  const blogList = () => (
    <div>
      <Notification message={errorMessage} styleMessage={notificationStyle} />

      <h2>blogs</h2>
      {blogs.map((blog, index) => (
        <Blog key={blog.id} blog={blog} addLike={addLike} index={index} removeBlog={removeBlog}/>
      ))}
    </div>
  )

  return (
    <div>
      <Notification message={errorMessage} />

      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>
            {/* {user.username} logged-in */}
            <button onClick={() => {
              window.localStorage.removeItem('loggedNoteappUser')
              window.localStorage.clear()
              setUser(null)
            }}>Log out</button>
          </p>
          <AddBlogForm
            addBlog={addBlog}
          />
          {blogList()}
        </div>
      )}

      {/* <Footer /> */}
    </div>
  )
}


export default App
