import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <div>Ini Halaman HomePage</div>
      <Link to="/login" className="font-bold text-red-500">Menuju ke Login</Link>
    </div>
  )
}

export default HomePage