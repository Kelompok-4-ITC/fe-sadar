import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <h1 className="font-bold text-red-500">Error - 404</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to="/" className="text-blue-500">Kembali ke Home</Link>
    </div>
  )
}

export default ErrorPage