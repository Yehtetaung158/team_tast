import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/style/index.css'
import '../src/style/home.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
