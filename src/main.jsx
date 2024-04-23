import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './styles/reset.css'
import './styles/global.scss'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Teste from './pages/teste.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/teste",
    element: <Teste />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
