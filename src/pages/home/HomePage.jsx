import Logo from "../../assets/LogoSadar.svg";
import Notification from "../../assets/Notification.svg";
import Photo from "../../assets/corosek.png";
import PickUp from "../../img/Icon-PickUp.png";
import DropOff from "../../img/Icon-Drop-Off.png";
import Shop from "../../img/Icon-Shop.png";
import Berita1 from "../../img/Berita1.svg";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  // Kalo belum login suruh login dulu
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('jwttoken')) {
      navigate("/login")
    }
  }, [navigate]);

  // Sekarang Halaman Home
  const valueNavbar = 'home';

  // Navigate functions
  const keTentangKami = () => navigate('/test');
  const keBerita = () => navigate('/berita');
  const keNotif = () => navigate('/notifikasi');
  const kePickUp = () => navigate('/pick-up');
  const keDropOff = () => navigate('/drop-off');
  const keShop = () => navigate('/shop');

  return (
    <div className="overflow-x-hidden">
      {/* Headline */}
      <div className="fixed z-50 w-full bg-white">
        <div className="flex justify-between items-center py-2 px-5">
          <div className="flex items-center text-2xl font-semibold">
            <img src={Logo} alt="Logo" className="mr-2" /> SADAR
          </div>
          <img src={Notification} className="cursor-pointer" onClick={keNotif} alt="Notification" />
        </div>
      </div>

      <div className="pt-16">
        <img src={Photo} alt="Main" className="w-full" />

        {/* Main content */}
        <div className="absolute w-full -mt-10 bg-white rounded-t-2xl p-4">
          <div className="flex justify-center space-x-6 pb-4">
            <div className="flex flex-col items-center text-center cursor-pointer" onClick={kePickUp}>
              <img
                src={PickUp}
                alt="Pick Up"
                className="w-20 h-20 border rounded-lg shadow-md"
              />
              <span className="font-semibold text-xs">Pick Up</span>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer" onClick={keDropOff}>
              <img
                src={DropOff}
                alt="Drop Off"
                className="w-20 h-20 border rounded-lg shadow-md"
              />
              <span className="font-semibold text-xs">Drop Off</span>
            </div>
            <div className="flex flex-col items-center text-center cursor-pointer" onClick={keShop}>
              <img
                src={Shop}
                alt="Shop"
                className="w-20 h-20 border rounded-lg shadow-md"
              />
              <span className="font-semibold text-xs">Shop</span>
            </div>
          </div>

          <div className="font-bold text-lg text-black py-4">
            Berita Apa Hari Ini?
          </div>

          {/* News section */}
          <div className="space-y-4 md:pb-[100px]">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex p-2 border rounded-lg shadow-md cursor-pointer" onClick={keBerita}>
                <img
                  src={Berita1}
                  alt="Berita"
                  className="w-20 h-20 border rounded-lg object-cover"
                />
                <div className="flex flex-col ml-4">
                  <div className="font-bold text-sm">Hari Sampah Sedunia</div>
                  <div className="text-xs">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when...
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed bottom-0 w-full">
        <Navbar value={valueNavbar} />
      </div>
    </div>
  );
}

export default HomePage;