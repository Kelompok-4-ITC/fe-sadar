import BackButton from '../../components/BackButton'
import Navbar from "../../components/Navbar";

import LabelReuse from "../../img/shop-label-reuse.png"
import FotoBarang from "../../img/shop-foto-product.png"

function ShopDetailPembelianPage() {
  // Sekarang Halaman Home
  const valueNavbar = 'home';

  return (
    <div className='flex flex-col bg-sadar-second-white h-screen'>
      {/* Bagian Atas */}
      <section className='flex px-5 py-[10px] gap-5'>
        <BackButton path={"/shop"} />
        <div className='flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full'>
          <h1 className='font-semibold text-t-black text-base'>Detail Pembelian</h1>
        </div>
      </section>

      {/* Alamat Pengiriman */}
      <section className='px-5 py-[10px] border-b-black border'>
        <div className='flex'>
          <h1 className='font-semibold text-t-black text-base'>Alamat Pengiriman</h1>
          <img src="" alt="" />
        </div>
        <p className='text-sm font-normal'>Kim Tae Alexander | 0800-7890-9000</p>
        <p className='text-sm font-normal'>Jalan Dirgantara III No.77, Caturtunggal, Depok, Sleman I Yogyakarta, ID 55282</p>
        <div className='flex border border-sadar-primary-color rounded-[10px] p-[10px] items-center justify-beetween'>
          <h1>Ganti Alamar</h1>
          <img src="" alt="" />
        </div>
      </section>

      {/* Product */}
      <section className='px-5 py-[10px] border-sadar-thrid-black border'>
        <h1 className='font-semibold text-t-black text-base'>Produk</h1>
        <div className='flex gap-2 tems-center p-[10px]'>
          <img src={FotoBarang} className='w-[50px]' />
          <div className='flex flex-col'>
            <img src={LabelReuse} className='w-[50px]' />
            <h2 className='text-[#D05C37] font-bold text-[10px]'>Rp. 115.000</h2>
            <p className='font-normal text-black text-[10px]'>Sofa bekas bahan kapas dimensi 40 x 50 m warna biru</p>
          </div>
        </div>
        <div className='flex border border-[#202020]  rounded-[10px] p-[10px] items-center justify-beetween'>
          <h1>Pilih Voucer</h1>
          <img src="" alt="" />
        </div>
      </section>

      {/* Rician Pembayaran */}
      <section className='px-5 py-[10px] border-sadar-thrid-black border'>
        <div className='flex mb-2'>
          <h1 className='font-semibold text-t-black text-base'>Rincian Pembayaran</h1>
          <img src="" alt="" />
        </div>

        <div className='mb-2'>
          <div className='flex justify-between'>
            <h2>Subtotal Produk</h2>
            <h2>Rp. 115.000</h2>
          </div>
          <div className='flex justify-between'>
            <h2>Biaya Pengiriman</h2>
            <h2>Rp. 10.000</h2>
          </div>
          <div className='flex justify-between'>
            <h2>Biaya Layanan</h2>
            <h2>Rp. 1.000</h2>
          </div>
          <div className='flex justify-between'>
            <h2>Diskon Voucer</h2>
            <h2>Rp. 15.000</h2>
          </div>
          <div className='flex justify-between bg-[#FF9E80]'>
            <h2>Total Pembayaran</h2>
            <h2>Rp. 111.000</h2>
          </div>
        </div>

        <div className='flex border border-[#202020]  rounded-[10px] p-[10px] items-center justify-beetween'>
          <h1>Pilih Metode Pemnbayaran</h1>
          <img src="" alt="" />
        </div>
      </section>

      {/* navbar */}
      <div className="bottom-0 fixed w-screen">
        {/* <div className="bottom-0 fixed w-screen border border-[#DCE1E4] bg-white"> */}
        <Navbar value={valueNavbar} />
      </div>
    </div>
  )
}

export default ShopDetailPembelianPage