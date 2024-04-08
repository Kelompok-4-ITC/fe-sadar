import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BeritaPage from './pages/BeritaPage'
import ErrorPage from './pages/ErrorPage'
import ProsesPage from './pages/ProsesPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPageLanjut from './pages/RegisterPageLanjut'

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition:Bounce
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-data" element={<RegisterPageLanjut />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/proses" element={<ProsesPage />} />
        {/* Error Page */}
        <Route path="/test" element={<BeritaPage />} />
        <Route path="/*" element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
