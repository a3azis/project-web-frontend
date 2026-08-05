export default function LeftAside() {
  return (
    <aside className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-zinc-300 flex flex-col gap-5 shadow-lg">
      
      {/* 1. KEUNGGULAN TOKO */}
      <div className="flex flex-col gap-2.5">
        <h2 className="text-xs uppercase tracking-wider text-zinc-500 font-bold font-mono">Keunggulan</h2>
        
        <div className="flex items-center gap-3 bg-zinc-800/50 p-2.5 rounded-lg border border-zinc-700/40 hover:border-zinc-600 transition">
          <span className="text-lg">✨</span>
          <div className="text-xs">
            <p className="font-semibold text-white">Curated Items</p>
            <p className="text-zinc-400 text-[11px]">Pilihan & siap pakai</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-zinc-800/50 p-2.5 rounded-lg border border-zinc-700/40 hover:border-zinc-600 transition">
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
        <button className="mt-2 text-xs w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition cursor-pointer">
          Chat Admin
        </button>
      </div>

    </aside>
  )
}