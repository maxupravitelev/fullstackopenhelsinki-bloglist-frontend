import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'


ReactDOM.render(
  <Provider store={store} >
    <App  />
  </Provider>,
  document.getElementById('root')
)

// install dependecies for cypress:
// sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

// https://fullstackopen.com/en/part7/exercises_extending_the_bloglist