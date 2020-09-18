import React, { useState, useEffect } from "react";
import AddBlogForm from "./components/AddBlogForm";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);


  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });

      blogService.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
      console.log(user);
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const loginForm = () => (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );

    const addBlog = async (title, author, url) => {
      
      const newBlog = {title, author, url}
      
      // blogService.create(newBlog).then((response) => {
      //   console.log(response)
      // })

      // setBlogs([
      //   ...blogs,
      //   newBlog
      // ])
 
      // blogService.getAll().then((blogs) => setBlogs(blogs));

      await blogService.create(newBlog)

      const newBlogList = await blogService.getAll()

      console.log(newBlogList)

      setBlogs(newBlogList)

    }



  

  const blogList = () => (
    <div>
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
            <button onClick={() => setUser(null)}>Log out</button>
          </p>
          <AddBlogForm 
            addBlog={addBlog}
            />
          {blogList()}
        </div>
     )}

      {/* <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div> */}
      {/* <ul>
        {notesToShow.map((note, i) => 
          <Note
            key={i}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )} */}
      {/* </ul> */}

      {/* <Footer /> */}
    </div>
  );
};

// if (user === null) {
// return (
//   <div>
//     <h2>Login</h2>
//     <form onSubmit={handleLogin}>
//       <div>
//         username
//           <input
//           type="text"
//           value={username}
//           name="Username"
//           onChange={({ target }) => setUsername(target.value)}
//         />
//       </div>
//       <div>
//         password
//           <input
//           type="password"
//           value={password}
//           name="Password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">login</button>
//     </form>
//     </div>
//   )
// }

//     return (
//   <div>
//     <h2>blogs</h2>
//     {blogs.map(blog =>
//       <Blog key={blog.id} blog={blog} />
//     )}
//   </div>
// )
//}

export default App;
