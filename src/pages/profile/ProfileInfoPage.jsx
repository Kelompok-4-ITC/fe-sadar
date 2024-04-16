import BackButton from '../../components/BackButton'
import IconInfo from '../../img/profile-icon-info.png'
import IconProfile from '../../img/profile-icon-profile.png'
import IconEmail from '../../img/profile-icon-email.png'
import IconPhone from '../../img/profile-icon-phone.png'
import IconAlamat from '../../img/profile-icon-alamat.png'
import IconMale from '../../img/profile-icon-male.png'

function ProfileInfoPage() {
  const data = {
    nama: 'Alexander Rahman Viscano',
    email: 'ITC4@gmail.com',
    nomerTelpon: '082133334444',
    alamatLengkap: 'Dirgantara III N0.77, Depok, Sleman, DIY',
    jenisKelamin: 'Laki-laki',
    tanggalLahir: '2000-01-32',
  }

  // Nomer HP jadi ada batasnya
  const pemechaNoHp = (nomerTelpon) => {
    return nomerTelpon.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
  }

  // Untuk Bagian tanggal lahir
  const bulanIndonesia = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const tanggal = data.tanggalLahir.split('-')[2];
  const bulan = bulanIndonesia[parseInt(data.tanggalLahir.split('-')[1]) - 1];
  const tahun = data.tanggalLahir.split('-')[0];

  return (
    <>
      <div className='flex flex-col gap-[16px] py-[10px] bg-sadar-second-white'>
        {/* Bagian Atas */}
        <section className='flex px-5 py-[10px] gap-5'>
          <BackButton path={"/profile"} />
          <div className='flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full'>
            <h1 className='font-semibold text-t-black text-base'>Info Personal </h1>
            <img src={IconInfo} alt="icon info" />
          </div>
        </section>
        {/* Bagian Info */}
        <main className='flex flex-col gap-[22px] py-5 px-[13px]'>
          {/* Nama */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-sm font-normal text-t-black'>Nama</h1>
            <div className='flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]'>
              <img src={IconProfile} alt="icon profile" className='size-[22px]' />
              <h2 className='text-sm font-medium text-t-black'>{data.nama}</h2>
            </div>
          </div>
          {/* Email */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-sm font-normal text-t-black'>Alamat Email</h1>
            <div className='flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]'>
              <img src={IconEmail} alt="icon profile" className='size-[22px]' />
              <h2 className='text-sm font-medium text-t-black'>{data.email}</h2>
            </div>
          </div>
          {/* Nomer Telpon */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-sm font-normal text-t-black'>Nomor Telepon</h1>
            <div className='flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]'>
              <img src={IconPhone} alt="icon profile" className='size-[22px]' />
              <h2 className='text-sm font-medium text-t-black'>{pemechaNoHp(data.nomerTelpon)}</h2>
            </div>
          </div>
          {/* Alamat Lengkap */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-sm font-normal text-t-black'>Alamat Lengkap</h1>
            <div className='flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]'>
              <img src={IconAlamat} alt="icon profile" className='size-[22px]' />
              <h2 className='text-sm font-medium text-t-black'>{data.alamatLengkap}</h2>
            </div>
          </div>
          {/* Jenis Kelamin */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-sm font-normal text-t-black'>Jenis Kelamin</h1>
            <div className='flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]'>
              <img src={IconMale} alt="icon profile" className='size-[22px]' />
              <h2 className='text-sm font-medium text-t-black'>{data.jenisKelamin}</h2>
            </div>
          </div>
          {/* Tanggal Lahir */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-sm font-normal text-t-black'>Tanggal Lahir</h1>
            <div className='flex w-full justify-between'>
              <h1
                className='text-sm font-medium text-t-black px-8 border-b-2 border-t-black pb-[10px]'>{tanggal}
              </h1>
              <h1
                className='text-sm font-medium text-t-black px-8 border-b-2 border-t-black pb-[10px]'>
                {bulan}
              </h1>
              <h1
                className='text-sm font-medium text-t-black px-8 border-b-2 border-t-black pb-[10px]'>
                {tahun}
              </h1>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default ProfileInfoPage