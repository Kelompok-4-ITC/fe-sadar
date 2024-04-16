import BackButton from '../../components/BackButton'
import IconFaq from '../../img/profile-icon-faq.png'
import SearchIcon from '../../img/shop-search-icon.png'
import ArrowButton from "../../assets/ArrowButton.svg";
import { useState } from 'react';

function ProfileFaqPage() {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleDitekan = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); // Toggle index yang terbuka
  };


  const data = [
    {
      pertanyaan: "Apa langkah pertama dalam menyelesaikan masalah matematika?",
      jawaban: "Langkah pertama adalah memahami permasalahan secara menyeluruh."
    },
    {
      pertanyaan: "Mengapa penting untuk memiliki hobi?",
      jawaban: "Hobi memberikan waktu istirahat yang menyegarkan dari rutinitas sehari-hari."
    },
    {
      pertanyaan: "Apa yang menjadi fokus utama dalam belajar?",
      jawaban: "Fokus utama dalam belajar adalah pemahaman yang mendalam atas materi."
    },
    {
      pertanyaan: "Bagaimana cara meningkatkan konsentrasi?",
      jawaban: "Untuk meningkatkan konsentrasi, penting untuk mengurangi gangguan dan membuat jadwal yang teratur."
    },
    {
      pertanyaan: "Apa yang harus dilakukan sebelum tidur untuk tidur nyenyak?",
      jawaban: "Sebelum tidur, pastikan untuk merilekskan pikiran dan tubuh dengan menghindari layar gadget dan minum segelas susu hangat."
    },
    {
      pertanyaan: "Langkah-langkah dalam membangun sebuah rumah?",
      jawaban: [
        "1. Persiapkan desain atau rencana bangunan.",
        "2. Lakukan perizinan dan persetujuan yang diperlukan.",
        "3. Lakukan penggalian dan persiapan situs.",
        "4. Bangun fondasi.",
        "5. Bangun kerangka bangunan.",
        "6. Pasang atap dan dinding.",
        "7. Selesaikan instalasi listrik, air, dan saluran pembuangan.",
        "8. Pasang lapisan luar dan interior.",
        "9. Selesaikan detail interior dan eksterior.",
        "10. Selesaikan pemeriksaan akhir dan pemeliharaan."
      ]
    },
    {
      pertanyaan: "Langkah-langkah dalam membuat sebuah kue?",
      jawaban: [
        "1. Persiapkan bahan-bahan yang diperlukan.",
        "2. Panaskan oven dan siapkan loyang.",
        "3. Campurkan bahan-bahan kering.",
        "4. Campurkan bahan-bahan basah.",
        "5. Campurkan bahan-bahan kering dan basah bersama-sama.",
        "6. Tuangkan adonan ke dalam loyang.",
        "7. Panggang dalam oven sesuai dengan suhu dan waktu yang ditentukan.",
        "8. Dinginkan kue setelah dipanggang.",
        "9. Hias kue sesuai dengan selera.",
        "10. Siapkan untuk disajikan atau disimpan."
      ]
    }
  ];

  return (
    <>
      <div className='flex flex-col gap-[16px] py-[10px] bg-sadar-second-white pb-10'>
        {/* Bagian Atas */}
        <section className='flex px-5 py-[10px] gap-5'>
          <BackButton path={"/profile"} />
          <div className='flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full gap-7'>
            <h1 className='font-semibold text-t-black text-base'>FAQ </h1>
            <img src={IconFaq} alt="icon faq" />
          </div>
        </section>
        {/* Main */}
        <main className='flex flex-col gap-[15px] px-[30px] py-[15px] border-y-2 border-t-black'>
          {/* Searching Input */}
          <section className='w-full relative px-[10px]'>
            <input
              type="text"
              placeholder='Cari Pertanyaan'
              className='px-[10px] border border-sadar-second-black rounded-sm h-[40px] bg-t-white w-full pe-10 focus:outline-none'
              id='sarch'
            />
            <label htmlFor="search" className='absolute inset-y-0 end-4 flex items-center ps-4 cursor-pointer'>
              <img src={SearchIcon} alt="search" className="flex-shrink-0 w-auto" />
            </label>
          </section>
          {/* Box Pertanyaan */}
          <section className='flex flex-col gap-[15px]'>
            {data.map((item, index) => (
              <div key={index} className="flex flex-col pb-[15px] border border-b-t-black">
                {/* Pertanyaan */}
                <div className='flex justify-between gap-3 text-t-black font-medium text-[13px] leading-snug'>
                  <h1>{`${index + 1}. ${item.pertanyaan}`}</h1>
                  <div className='flex justify-center items-center'>
                    <button
                      className={`bg-sadar-primary-color rounded-full hover:bg-sadar-fourth-black size-7 text-center flex justify-center items-center transition-transform transform ${openIndex !== index ? '-rotate-90' : 'rotate-90'}`}
                      onClick={() => handleDitekan(index)}
                    >
                      <img src={ArrowButton} className="size-auto" alt="Arrow" />
                    </button>
                  </div>
                </div>
                {/* Jawaban */}
                <div className={`flex flex-col gap-1 pt-1 ${openIndex !== index ? 'hidden' : 'block'}`}>
                  <div className="text-t-black font-medium text-[13px] leading-snug">
                    {Array.isArray(item.jawaban) ? (
                      <ol>
                        {item.jawaban.map((langkah, langkahIndex) => (
                          <li key={langkahIndex}>{langkah}</li>
                        ))}
                      </ol>
                    ) : (
                      <p>{item.jawaban}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>

        </main>
      </div >
    </>
  )
}

export default ProfileFaqPage;
