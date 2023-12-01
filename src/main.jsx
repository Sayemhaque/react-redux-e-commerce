/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import { setUser } from './redux/feature/api/authSlice.js'


const user = JSON.parse(localStorage.getItem("user"))

if(user){
  store.dispatch(setUser(user))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
