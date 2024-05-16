import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import BeritaPage from './pages/home/BeritaPage'
import ErrorPage from './pages/ErrorPage'
import ProfilePage from './pages/profile/ProfilePage'

//Fitur Profile
import ProfileAchivementPage from './pages/profile/ProfileAchivementPage';
import ProfileFaqPage from './pages/profile/ProfileFaqPage';
import ProfileInfoPage from './pages/profile/ProfileInfoPage';
import PengaturanPage from './pages/profile/PengaturanPage';
import ProfileEditInfo from './pages/profile/ProfileEditInfo';

//Fitur Proses
import ProsesPage from './pages/proses/ProsesPage'
import RiwayatTransaksi from './pages/proses/RiwayatTransaksi';
import DetailRiwayatPage from './pages/proses/DetailRiwayatPage';
import RegisterPageLanjut from './pages/auth/RegisterPageLanjut'
import NotifikasiPage from './pages/home/NotifikasiPage'

// Fitur Pick Up
import PickupOrderForm from './pages/pick-up/PickUpOrderForm';
import PickUpCekPage from './pages/pick-up/PickUpCekPage';
import PickUpSuksesPage from './pages/pick-up/PickUpSuksesPage';

// Fitur Drop Off
import DropOffPage from './pages/drop-off/DropOffPage';
import DropOffLokasiPage from './pages/drop-off/DropOffLokasiPage'
import DropOffCekPage from './pages/drop-off/DropOffCekPage'
import DropOffTahapSatuPage from './pages/drop-off/DropOffTahapSatuPage';

// Fitur Chat
import ChatPage from './pages/chat/ChatPage';
import ChatingPage from './pages/chat/ChatingPage';

// Fitur Shop
import ShopPage from './pages/shop/ShopPage';
import ShopDetailPage from './pages/shop/ShopDetailPage';
import ShopDetailPembelian from './pages/shop/ShopDetailPembelian';


function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition:Zoom
      />
      <Routes>
        {/* Fitur Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-data" element={<RegisterPageLanjut />} />

        {/* Halaman Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/notifikasi" element={<NotifikasiPage />} />

        {/* Halaman Chat */}
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/chating" element={<ChatingPage />} />

        {/* Halaman Proses */}
        <Route path="/proses" element={<ProsesPage />} />

        {/* Halaman RiwayatTransaksi */}
        <Route path="/riwayat-transaksi" element={<RiwayatTransaksi />} />

        {/* Halaman DetailRiwayat */}
        <Route path="/detail-riwayat/:jenisPesanan/:kodePemesanan" element={<DetailRiwayatPage />} />

        {/* Halaman Profile */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/achievement" element={<ProfileAchivementPage />} />
        <Route path="/profile/faq" element={<ProfileFaqPage />} />
        <Route path="/profile/info" element={<ProfileInfoPage />} />
        <Route path="/profile/setting" element={<PengaturanPage />} />
        <Route path="/profile/info/edit" element={<ProfileEditInfo />} />


        {/* Halaman Shop */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/detail" element={<ShopDetailPage />} />
        <Route path="/shop/detail/pembelian" element={<ShopDetailPembelian />} />

        {/* Fitur - Pick Up */}
        <Route path="/pick-up" element={<PickupOrderForm />} />
        <Route path="/pick-up/cek" element={<PickUpCekPage />} />
        <Route path="/pick-up/sukses" element={<PickUpSuksesPage />} />

        {/* Fitur - Drop Off */}
        <Route path="/drop-off" element={<DropOffPage />} />
        <Route path="/drop-off/lokasi" element={<DropOffLokasiPage />} />
        <Route path="/drop-off/cek" element={<DropOffCekPage />} />
        <Route path="/drop-off/tahap-satu" element={<DropOffTahapSatuPage />} />

        {/* Error Page */}
        <Route path="/*" element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
