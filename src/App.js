import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import Bloglist from './components/Bloglist'
import Userlist from './components/Userlist'
import Menu from './components/Menu'
import Blog from './components/Blog'


import blogService from './services/blogs'



import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs } from './reducers/blogReducer'

import { loginUser, setUser } from './reducers/userReducer'
import { getAllUsers } from './reducers/usersReducer'


const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(getAllUsers())
  }, [dispatch])

  let user = useSelector(state => state.user)

  console.log(user)

  if (user === 'init') {
    user = null
  }

  // check if user is stored locally
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const userLocal = JSON.parse(loggedUserJSON)
      console.log(userLocal)
      dispatch(setUser(userLocal))
      blogService.setToken(userLocal.token)
    }
  }, [])


  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      dispatch(loginUser({
        username,
        password,
      }))

      dispatch(setNotification(`'${username}' logged in`, 3, 'green'))

    } catch (exception) {
      dispatch(setNotification('Wrong credentials', 3, 'red'))

    }
  }


  const loginForm = () => {

    return (
      <div>
        <div>
          <Notification />

          <Togglable buttonLabel='login'>
            <LoginForm
              username={username}
              password={password}
              handleUsernameChange={({ target }) => {setUsername(target.value)}}
              handlePasswordChange={({ target }) => setPassword(target.value)}
              handleLogin={handleLogin}
            />
          </Togglable>
        </div>
      </div>
    )
  }

  return (
    <Router>

      <div>
        <Notification />

        { ( user === null) ?
          loginForm()
          : (
            <div>

              <Menu />
              <Switch>
                <Route path='/blogs/:id'>
                  <Blog />
                </Route>
                <Route path="/blogs">
                  <AddBlogForm />
                  <Bloglist />
                </Route>

                <Route path="/users">
                  <Userlist />
                </Route>
              </Switch>
            </div>
          )}

        {/* <Footer /> */}
      </div>
    </Router>
  )
}


export default App
