import BannerShop from '../../img/shop-banner.png'
import OrnamenPoster from '../../img/shop-ornamen-poster.png'
// import OrnamenPoster from '../../assets/shop-ornamen-poster.svg'
import SearchIcon from '../../img/shop-search-icon.png'
import FilterIcon from '../../img/shop-filter-icon.png'
import FotoProduct from '../../img/shop-foto-product.png'
import LabelReuse from '../../img/shop-label-reuse.png'
import LabelRecycle from '../../img/shop-label-recycle.png'
import { useNavigate } from 'react-router-dom'

function ShopPage() {
  const product = [
    {
      id: 1,
      nama: 'Product 1',
      harga: 115000,
      deskripsi: 'Sofa bekas bahan kapas dimensi 40 x 50 m warna biru',
      tipe: 'reuse'
    },
    {
      id: 2,
      nama: 'Product 2',
      harga: 90000,
      deskripsi: 'Hiasan furniture rumah pot bunga palsu bahan hasil recycle',
      tipe: 'recycle'
    }, {
      id: 3,
      nama: 'Product 3',
      harga: 90000,
      deskripsi: 'Sofa bekas bahan kapas dimensi 40 x 50 m warna biru',
      tipe: 'reuse'
    }, {
      id: 4,
      nama: 'Product 4',
      harga: 90000,
      deskripsi: 'Hiasan furniture rumah pot bunga palsu bahan hasil recycle',
      tipe: 'recycle'
    }
  ]

  const navigate = useNavigate()
  const keDetail = () => {
    navigate('/shop/detail')
  }

  return (
    <>
      <div className='flex flex-col gap-[10px] pb-10'>
        {/* Poster */}
        <section id="poster" className='border-b-2 border-dashed border-b-[#202020] w-full'>
          <div className="px-[13px] py-[11px] flex gap-[10px] justify-center items-center bg-[#8DD3BB] h-auto">
            <img src={OrnamenPoster} alt="ornamen-poster" />
            <div id="teks" className="text-center">
              <h1 className="text-sadar-third-white font-bold text-base leading-5">
                Produk Recycle dan Barang Bekas <br />
                Menuju Bumi Yang Lebih Hijau
              </h1>
            </div>
            <img src={OrnamenPoster} alt="ornamen-poster" />
          </div>
          <img src={BannerShop} alt="banner-shop" className="w-full" />
        </section>
        {/* Searching Input */}
        <section className='w-full relative px-[10px]'>
          <input
            type="text"
            placeholder='Cari'
            className='px-[10px] border-2 border-[#202020] rounded-[10px] h-[40px] bg-t-white w-full pe-10'
            id='sarch'
          />
          <label htmlFor="search" className='absolute inset-y-0 end-4 flex items-center ps-4 cursor-pointer'>
            <img src={SearchIcon} alt="search" className="flex-shrink-0 w-auto" />
          </label>
        </section>
        {/* Heading Judul */}
        <section className='px-4 flex justify-between items-center'>
          <h1 className='font-semibold text-t-black text-lg'>New Product</h1>
          <div className='flex cursor-pointer'>
            <h1 className='font-semibold text-t-black text-lg'>Filter</h1>
            <img src={FilterIcon} alt="filter-icon" className='w-fit' />
          </div>
        </section>
        {/* Main - List Product*/}
        <main className='flex flex-wrap gap-[15px] px-4 justify-center ite'>
          {product.map((product, key) => (
            <div
              key={key}
              className='p-[10px] flex flex-col gap-[5px] border-t-grey border-2 rounded-lg w-[160px] justify-center cursor-pointer'
              onClick={keDetail}
            >
              <div className='relative'>
                <img src={FotoProduct} alt="product" className='h-[140px] w-[140px]' />
                {product.tipe === 'reuse' ?
                  <img src={LabelReuse} alt="label-reuse" className='absolute top-0 left-0 shadow-lg' />
                  :
                  <img src={LabelRecycle} alt="label-recycle" className='absolute top-0 left-0 shadow-lg' />
                }
              </div>
              <div className='flex flex-col gap-0'>
                <h1 className='font-bold text-t-black text-[13px]'>{product.nama}</h1>
                <h2 className='font-bold text-[#D05C37] text-[10px]'>Rp {product.harga}</h2>
                <p className='font-medium text-t-black text-[10px] overflow-hidden text-ellipsis line-clamp-2 leading-snug'>
                  {product.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </main>
        {/* Rekomendasi */}
        <section className='px-4 flex justify-between items-center'>
          <h className="font-semibold text-t-black text-lg">Recomended for you</h>
        </section>
        {/* Main - List Product*/}
        <main className='flex flex-wrap gap-[15px] px-4 justify-center ite'>
          {product.slice(0, 2).map((product, key) => (
            <div key={key} className='p-[10px] flex flex-col gap-[5px] border-t-grey border-2 rounded-lg w-[160px] justify-center'>
              <div className='relative'>
                <img src={FotoProduct} alt="product" className='h-[140px] w-[140px]' />
                {product.tipe === 'reuse' ?
                  <img src={LabelReuse} alt="label-reuse" className='absolute top-0 left-0 shadow-lg' />
                  :
                  <img src={LabelRecycle} alt="label-recycle" className='absolute top-0 left-0 shadow-lg' />
                }
              </div>
              <div className='flex flex-col gap-0'>
                <h1 className='font-bold text-t-black text-[13px]'>{product.nama}</h1>
                <h2 className='font-bold text-[#D05C37] text-[10px]'>Rp {product.harga}</h2>
                <p className='font-medium text-t-black text-[10px] overflow-hidden text-ellipsis line-clamp-2 leading-snug'>
                  {product.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

export default ShopPage