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
import PickUpCekPage from './pages/pick-up/PickUpCekPage';
import PickUpSuksesPage from './pages/pick-up/PickUpSuksesPage';
import TodoPage from './pages/pick-up/TodoPage'

// Fitur Drop Off
import DropOffPage from './pages/drop-off/DropOffPage';
import DropOffLokasiPage from './pages/drop-off/DropOffLokasiPage'
import DropOffCekPage from './pages/drop-off/DropOffCekPage'
import DropOffTahapSatuPage from './pages/drop-off/DropOffTahapSatuPage';
import TodoList from './pages/pick-up/ToDoList';

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
        <Route path="/pick-up/cek" element={<PickUpCekPage />} />
        <Route path="/pick-up/sukses" element={<PickUpSuksesPage />} />

        {/* Fitur - Drop Off */}
        <Route path="/drop-off" element={<DropOffPage />} />
        <Route path="/drop-off/lokasi" element={<DropOffLokasiPage />} />
        <Route path="/drop-off/cek" element={<DropOffCekPage />} />
        <Route path="/drop-off/tahap-satu" element={<DropOffTahapSatuPage />} />

        {/* Error Page */}
        <Route path="/test" element={<TodoPage />} />
        <Route path="/test/test" element={<TodoList />} />
        <Route path="/*" element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
