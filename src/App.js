import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: ''
  })

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

    const addBlog = () => {
      blogService.create(newBlog).then((response) => {
        console.log(response)
      })
 
    }

    const handleBlogFormChange = (event) => {
      let name = event.target.name;

      let newBlogToBeCreated = event.target.value;

      setNewBlog({
        ...newBlog,
        [name]: newBlogToBeCreated
      })
    } 

  const newBlogForm = () => (
    <div>


      <form onSubmit={addBlog}>
        
      <div>
        title:
        <input
          type="text"
          value={newBlog.title}
          name="title"
          // onChange={({ target }) => setNewBlog(target.value)}
          onChange={handleBlogFormChange}
    />
      </div>
      <div>
        author:
        <input
          type="text"
          value={newBlog.author}
          name="author"
          // onChange={({ target }) => setNewBlog(target.value)}
          onChange={handleBlogFormChange}

        />
      </div>
      <div>
        url:
        <input
          type="text"
          value={newBlog.url}
          name="url"
          // onChange={({ target }) => setNewBlog(target.value)}
          onChange={handleBlogFormChange}

        />
      </div>
        <button type="submit">create</button>
      </form>
    </div>
  );

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
          {newBlogForm()}
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
