import BackButton from "../../components/BackButton";
import FotoProduct from "../../img/shop-foto-product.png";
import LabelReuse from "../../img/shop-label-reuse.png";
import IconChat from "../../img/shop-icon-chat.png";
import IconPembayaran from "../../img/icon-pembayaran.png";
import IconAlamat from "../../img/profile-icon-alamat.png";
import Forward from "../../assets/Forward.svg";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function ShopDetailPembelianPage() {
  // Sekarang Halaman Home
  const valueNavbar = 'home';

  // untuk navigate
  const navigate = useNavigate();

  // ke Pilih Alamat
  function kePilihAlamat() {
    navigate('/shop/pilih-alamat')
  }

  // ke voucer
  function kePilihVoucer() {
    navigate('/shop/pilih-voucer')
  }

  // ke pembayaran
  function kePilihPembayaran() {
    navigate('/shop/pilih-pembayaran')
  }


  return (
    <>
      <div className="flex flex-col gap-[10px] bg-sadar-second-white pb-[70px]">
        {/* Bagian Atas */}
        <section className="flex px-5 py-[10px] gap-5">
          <BackButton path={"/shop/detail-produk"} />
          <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
            <h1 className="font-semibold text-t-black text-base">
              Detail Pembelian
            </h1>
          </div>
        </section>
        {/* Product */}
        <main className="bg-white">
          {/* Alamat Pembelian */}
          <div className="px-[20px] py-[10px] flex gap-[10px] flex-col">
            <div className="flex flex-row justify-between w-full">
              <div className="font-semibold text-[16px]">Alamat Pembelian</div>
              <div>
                <img src={IconAlamat} alt="" />
              </div>
            </div>
            <div className="text-regular text-[14px]">
              <div>Kim Tae Alexander | 0800-7890-9000</div>
              <div>
                Jalan Dirgantara III No.77, Caturtunggal, Depok, Sleman, DI
                Yogyakarta, ID 55282
              </div>
            </div>
            <div className="bg-[#F9F7F7] p-[10px] border-[1px] border-sadar-primary-color rounded-[10px] flex flex-row justify-between items-center" onClick={kePilihAlamat}>
              <div>Ganti Alamat</div>
              <div>
                <img src={Forward} alt="" />
              </div>
            </div>
          </div>
          {/* Produk */}
          <div className="px-[20px] py-[10px] flex flex-col gap-[10px]">
            <div className="font-semibold text-[16px]">Produk</div>
            <div className="flex flex-row gap-[20px] p-[10px]  border-[#D9D9D9] border-[1px] bg-sadar-second-white">
              <div>
                <img src={FotoProduct} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[5px] text-[10px]">
                <div>
                  <img src={LabelReuse} alt="" />
                </div>
                <div className="font-bold text-[#D05C37]">Rp. 115.000</div>
                <div className="text-regular">
                  Sofa bekas bahan kapas dimensi 40 x 50 m warna biru
                </div>
              </div>
            </div>
            <div className="bg-[#F9F7F7] p-[10px] border-[1px] border-sadar-primary-color rounded-[10px] flex flex-row justify-between items-center" onClick={kePilihVoucer}>
              <div>Pilih Voucher</div>
              <div>
                <img src={Forward} alt="" />
              </div>
            </div>
          </div>
          {/* Rincian Pembayaran */}
          <div className="px-[20px] py-[10px] flex flex-col gap-[10px]">
            <div className="flex flex-row justify-between w-full">
              <div className="font-semibold text-[16px]">Rincian Pembayaran</div>
              <div>
                <img src={IconPembayaran} alt="" />
              </div>
            </div>
            <div>
              <div className="gap-[10px] text-[14px]">
                {[
                  { title: "Subtotal Produk", value: "Rp 115.000" },
                  { title: "Biaya Pengiriman", value: "Rp 115.000" },
                  { title: "Biaya Layanan", value: "Rp 115.000" },
                  { title: "Diskon Voucher", value: "Rp 115.000" },
                ].map((item) => (
                  <div
                    className="flex flex-row justify-between px-[5px]"
                    key={item.title}
                  >
                    <div>{item.title}</div> <div>{item.value}</div>
                  </div>
                ))}

                <div className="flex flex-row justify-between bg-[#FF3D00] bg-opacity-50 px-[5px] rounded-[5px]">
                  <div>Total Pembayaran</div> <div>Rp 115.000</div>
                </div>
              </div>
            </div>
            <div className="bg-[#F9F7F7] p-[10px] border-[1px] border-sadar-primary-color rounded-[10px] flex flex-row justify-between items-center" onClick={kePilihPembayaran}>
              <div>Pilih Metode Pembayaran</div>
              <div>
                <img src={Forward} alt="" />
              </div>
            </div>
          </div>
        </main>
        {/* navbar */}
        <div className="bottom-0 fixed w-screen">
          {/* <div className="bottom-0 fixed w-screen border border-[#DCE1E4] bg-white"> */}
          <Navbar value={valueNavbar} />
        </div>
      </div>
    </>
  );
}

export default ShopDetailPembelianPage