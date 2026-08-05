import Tombol from './COMPONENT/tombol.jsx'
import LogoOldage from './assets/logo.oldage-removebg-preview.png'
import bennerImg from './assets/benner1.oldage.png'
import card1Img from './assets/card1.jpg'
import DropCountDown from './COMPONENT/dropCountDown.jsx'
import BoxThree from './COMPONENT/BoxThree.jsx'
import ProdukCard from './COMPONENT/produkCard.jsx'
import leftAside from './COMPONENT/leftAside.jsx'
import { useWindowSize } from './hooks/useWindowSize.jsx'


export default function App() {
  const { width } = useWindowSize();

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-purple-600/90 px-3 py-2 text-xs font-mono text-black shadow-xl backdrop-blur-sm border border-purple-400/30 pointer-events-none">
        <span>{width}px</span> . <span>{width < 768 ? 'Mobile' : 'Desktop'}</span>
      </div>
      <div className='app-layout font-mono pt-15 md:pt-20 text-white'>
        <header className='fixed top-0 left-0 w-full font-mono flex justify-between items-center px-4 md:px-20 py-3 md:py-5 bg-white/20 text-white backdrop-blur-md border-b border-white/30 shadow-lg z-40'>
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img
                src={LogoOldage}
                alt="Logo Website"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>
          <div className='hidden md:flex items-center gap-10'>
            <a href='#' className='transition duration-500 ease-in-out hover:scale-110'>Hoodie</a>
            <a href='#' className='transition duration-500 ease-in-out hover:scale-110'>Crewneck</a>
            <a href='#' className='transition duration-500 ease-in-out hover:scale-110'>Kaos Vintage</a>
            <a href='#' className='transition duration-500 ease-in-out hover:scale-110'>Hoodie zipper</a>
          </div>
          <div className="flex items-end gap-2 md:gap-4">
            <div className="flex items-center text-white bg-gray-700 p-1.5 md:p-2 rounded font-mono">
              <a href='' className='flex m-0 gap-1 md:gap-2 transition duration-500 ease-in-out hover:scale-110'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="md:w-6 md:h-6">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="hidden sm:inline">Contact</span>
              </a>
            </div>
          </div>
        </header>
        <div className='benner bg-transparent w-full h-auto md:h-full rounded-xl mt-16 md:mt-2 object-contain border'>
          <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-5 items-center justify-center text-center">
            <h1 className="text-xl md:text-2xl mb-2 md:mb-4 text-center">Countdown Jadwal Drop Produk</h1>
            <DropCountDown targetDate="2026-10-31T23:59:59" />
            <Tombol />
            <BoxThree />
          </div>
        </div>
        <div className='left-aside'>
          <aside className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-zinc-300 flex flex-col gap-5 shadow-lg">

            {/* 1. KEUNGGULAN TOKO */}
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xs uppercase tracking-wider text-zinc-500 font-bold font-mono">Keunggulan</h2>

              <div className="flex items-center gap-3 bg-zinc-800/50 p-2.5 rounded-lg border border-zinc-700/40 hover:border-zinc-600 transition cursor-pointer">
                <span className="text-lg">✨</span>
                <div className="text-xs">
                  <p className="font-semibold text-white">Curated Items</p>
                  <p className="text-zinc-400 text-[11px]">Pilihan & siap pakai</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-800/50 p-2.5 rounded-lg border border-zinc-700/40 hover:border-zinc-600 transition cursor-pointer">
                <span className="text-lg">🚚</span>
                <div className="text-xs">
                  <p className="font-semibold text-white">Fast Shipping</p>
                  <p className="text-zinc-400 text-[11px]">Kirim hari yang sama</p>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800" />

            {/* 2. FILTER UKURAN */}
            <div>
              <h2 className="text-xs uppercase tracking-wider text-zinc-500 font-bold font-mono mb-2.5">Pilih Ukuran</h2>
              <div className="grid grid-cols-4 gap-2 text-xs text-center font-mono">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="py-1.5 bg-zinc-800 hover:bg-blue-600 hover:text-white rounded-md border border-zinc-700 transition cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-zinc-800" />

            {/* 3. BANTUAN */}
            <div className="bg-gradient-to-br from-blue-950/40 to-zinc-900 p-3 rounded-lg border border-blue-500/30 text-center">
              <p className="text-xs text-blue-300 font-medium">Bingung Pilihan Size?</p>
              <button 
              href="https://www.instagram.com/oldagesecond/"
              onClick={() => window.open('https://www.instagram.com/oldagesecond/', '_blank')}
              className="mt-2 text-xs w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition cursor-pointer">
                Chat Admin
              </button>
            </div>

          </aside>
        </div>
        <main className='h-full'>
          <ProdukCard />
        </main>
        <div className='right-aside bg-transparent h-auto md:h-full md:p-3'>
          <h1 className='text-xl md:text-2xl font-mono mb-4 md:mb-8 text-white'>right-aside</h1>
        </div>
        {/* ini area low-content*/}
        <div className='low-content bg-zinc-900 w-full h-auto md:h-full md:p-6 lg:p-10 '>
          <h1 className="font-mono text-xl md:text-2xl mb-3 md:mb-5">Featured Content</h1>
          <div className=' grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
            <div className='p-3 bg-blue-600/20 flex text-blue-400 font-sm rounded-lg shrink-0 gap-3 md:gap-5'>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L3 9.9a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0z" />
                  <line x1="14.5" y1="12.5" x2="16.5" y2="10.5" />
                  <line x1="11.5" y1="9.5" x2="13.5" y2="7.5" />
                  <line x1="8.5" y1="6.5" x2="10.5" y2="4.5" />
                </svg>
              </div>
              <div>
                <h1 className='font-mono text-base md:text-lg uppercase mb-1'>Size Guide:</h1>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Temukan ukuran paling pas untuk hoodie favorit Anda. Lihat tabel
                  ukuran lengkap kami untuk presisi total.</p>
              </div>
            </div>
            <div className='p-3 bg-blue-600/20 flex text-blue-400 font-sm rounded-lg shrink-0 gap-3 md:gap-5'>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                </svg>
              </div>
              <div>
                <h1 className='font-mono text-base md:text-lg uppercase mb-1'>Limited Offer:</h1>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Diskon 20% untuk koleksi Leher Bulat minggu ini saja. Kode:
                  <span className="text-white font-semibold">ROUND20</span></p>
              </div>
            </div>
            <div className='p-3 bg-blue-600/20 flex text-blue-400 font-sm rounded-lg shrink-0 gap-3 md:gap-5'>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <h1 className='font-mono text-base md:text-lg uppercase mb-1'>Follow Us:</h1>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Dapatkan update model terbaru dan sneak peeks di Instagram kami
                  <span className="text-blue-400 font-medium"><a href="https://www.instagram.com/oldagesecond/" target="_blank" rel="noopener noreferrer">@oldagesecond
                  </a></span>. #msha.ke/oldage</p>
              </div>
            </div>
          </div>
        </div>
        {/*END LOW CONTENT*/}
        <footer className='bg-amber-800 h-auto'>
          <h1>Footer</h1>
        </footer>
      </div>
    </>
  )
}


