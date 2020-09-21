import React, { useState, useEffect } from "react";

import AddBlogForm from "./components/AddBlogForm";
import Blog from "./components/Blog";
import Notification from "./components/Notification"
import LoginForm from "./components/LoginForm"

import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false)

  const [blogs, setBlogs] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);
  const [messageColor, setMessageColor] = useState("red");

  const notificationStyle = {
    color: messageColor,
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, []) // "The empty array as the parameter of the effect ensures that the effect is executed only when the component is rendered for the first time."

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      ) 

      blogService.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
      console.log(user);


    } catch (exception) {
      setMessageColor("red");
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };


    const addBlog = async (title, author, url) => {
      
      const newBlog = {title, author, url}
      
      await blogService.create(newBlog)

      const newBlogList = await blogService.getAll()

      console.log(newBlogList)

      setMessageColor("green");
      setErrorMessage(`'${newBlog.title}' by '${newBlog.author}' added`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      setBlogs(newBlogList)

    }
    
    const loginForm = () => {
      const hideWhenVisible = { display: loginVisible ? 'none' : '' }
      const showWhenVisible = { display: loginVisible ? '' : 'none' }
  
      return (
        <div>
          <div style={hideWhenVisible}>
            <button onClick={() => setLoginVisible(true)}>log in</button>
          </div>
          <div style={showWhenVisible}>
            <Notification message={errorMessage} styleMessage={notificationStyle} />
            <LoginForm
              username={username}
              password={password}
              handleUsernameChange={({ target }) => setUsername(target.value)}
              handlePasswordChange={({ target }) => setPassword(target.value)}
              handleLogin={handleLogin}
            />
            <button onClick={() => setLoginVisible(false)}>cancel</button>
          </div>
        </div>
      )
      }
  

  const blogList = () => (
    <div>
      <Notification message={errorMessage} styleMessage={notificationStyle} />

      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );

  return (
    <div>
      {/* <Notification message={errorMessage} /> */}

      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>
            {/* {user.username} logged-in */}
            <button onClick={() => {
              window.localStorage.removeItem('loggedNoteappUser')
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
  );
};


export default App;
