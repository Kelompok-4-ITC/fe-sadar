import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BeritaPage from './pages/BeritaPage'
import ErrorPage from './pages/ErrorPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPageLanjut from './pages/RegisterPageLanjut'
import NotifikasiPage from './pages/NotifikasiPage'

// Fitur Pick Up
import PickUpPage from './pages/pick-up/PickUpPage'
import SuksesPage from './pages/pick-up/SuksesPage'
import TodoPage from './pages/pick-up/TodoPage'

// Fitur Drop Off
import DropOffPage from './pages/drop-off/DropOffPage';
import TahapSatuPage from './pages/drop-off/TahapSatuPage';

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
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/notifikasi" element={<NotifikasiPage />} />
        {/* Fitur - Pick Up */}
        <Route path="/pick-up" element={<PickUpPage />} />
        <Route path="/pick-up/sukses" element={<SuksesPage />} />

        {/* Fitur - Drop Off */}
        <Route path="/drop-off" element={<DropOffPage />} />
        <Route path="/drop-off/tahap-satu" element={<TahapSatuPage />} />

        {/* Error Page */}
        <Route path="/test" element={<TodoPage />} />
        <Route path="/*" element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
