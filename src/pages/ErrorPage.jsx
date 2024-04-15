import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-xl">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-3 text-lg font-medium">Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
        <Link to="/" className="mt-5 inline-block px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage