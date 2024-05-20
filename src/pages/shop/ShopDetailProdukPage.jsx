import BackButton from '../../components/BackButton'
import FotoProduct from '../../img/shop-foto-product.png'
import LabelReuse from '../../img/shop-label-reuse.png'
import IconChat from '../../img/shop-icon-chat.png'
import IconBuy from '../../img/shop-icon-buy.png'
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function ShopDetailProdukPage() {
  // Sekarang Halaman Home
  const valueNavbar = 'home';

  // untuk navigate
  const navigate = useNavigate();

  // ke Chat Page
  function keChat() {
    navigate('/chat')
  }

  // ke Chat Detail Pembelian
  function keDetailPembelian() {
    navigate('/chat')

  }

  return (
    <>
      <div className='flex flex-col gap-[10px] bg-sadar-second-white'>
        {/* Bagian Atas */}
        <section className='flex px-5 py-[10px] gap-5'>
          <BackButton path={"/shop"} />
          <div className='flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full'>
            <h1 className='font-semibold text-t-black text-base'>Detail Produk</h1>
          </div>
        </section>
        {/* Product */}
        <main className='flex flex-col gap-[5px] p-[10px] border border-t-grey bg-white pb-20'>
          {/* Bagian Foto */}
          <div className='relative'>
            <img src={FotoProduct} alt="foto product" className="w-full h-[212px] object-cover" />
            <img src={LabelReuse} alt="label-reuse" className='absolute top-0 left-0 shadow-lg' />
            <div className='absolute bottom-0 right-0'>
              <div className='flex'>
                <div id='chat' className='bg-sadar-second-white p-1  w-fit cursor-pointer' onClick={keChat}>
                  <img src={IconChat} alt="icon chat" />
                  <h1 className='text-center font-semibold text-[10px] text-t-grey'>Chat Penjual</h1>
                </div>
                <div id='buy' className='bg-[#FF3D00] p-1  w-fit cursor-pointer' onClick={keDetailPembelian}>
                  <img src={IconBuy} alt="icon buy" />
                  <h1 className='text-center font-semibold text-[10px] text-t-white'>Beli Sekarang</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Bagian Data Product */}
          <div className='flex flex-col gap-[5px]'>
            <div id='heading'>
              {/* <h1 className='font-bold text-t-black text-lg'>Nama Product</h1> */}
              <h1 className='font-semibold text-[#D05C37] text-sm'>Rp 115.000</h1>
              <p className='font-medium text-t-black text-sm'>Sofa bekas bahan kapas dimensi 40 x 50 cm warna biru merk gucci kw</p>
            </div>
            <div className='h-[1px] w-full bg-t-black'></div>
            <div id='deskripsi'>
              <h1 className='font-semibold text-t-black text-base'>Deskripsi</h1>
              <div className='font-medium text-t-black text-sm'>
                <p>Sofa berbahan polyester yang lembut</p>
                <p>Ukuran 40 x 50 cm</p>
                <p>Sofa brand Gucci kw</p>
                <p>desain minimalis yang cocok untuk memperindah ruang tamu</p>
                <p>asal pengiriman : jakarta utara</p>
              </div>
            </div>
            <div className='h-[1px] w-full bg-t-black'></div>
            <div id='foto-terkait'>
              <h1 className='font-semibold text-t-black text-base'>Foto Terkait Produk</h1>
              <div className='flex w-full justify-between'>
                <img src={FotoProduct} alt="foto product" className='w-1/3 object-cover' />
                <img src={FotoProduct} alt="foto product" className='w-1/3 object-cover' />
                <img src={FotoProduct} alt="foto product" className='w-1/3 object-cover' />
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
  )
}

export default ShopDetailProdukPage 