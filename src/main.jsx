import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

import "./css/main.css"

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* kalo nerapin routes, pake yang App , kalo uji coba pages, ditaruh aja */}
      <App />

      {/* <LoginPage /> */}

      {/* kalau mau nyoba  */}
      {/* <RegisterPage /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
