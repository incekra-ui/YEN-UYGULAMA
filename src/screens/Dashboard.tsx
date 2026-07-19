import { motion } from 'motion/react';
import { LogOut, Home, Search, Heart, User, MapPin } from 'lucide-react';
import { Screen } from '../App';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-neutral-50 flex flex-col pb-20"
    >
      <header className="bg-green-600 text-white pt-12 pb-6 px-6 rounded-b-[2rem] shadow-md relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">AgriTrade</h1>
            <p className="text-green-100 text-sm">Hoş Geldiniz</p>
          </div>
          <button 
            onClick={onLogout}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <LogOut className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3.5 bg-white text-neutral-900 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-neutral-400 font-medium"
            placeholder="Ürün veya satıcı ara..."
          />
        </div>
      </header>

      <main className="flex-1 px-6 py-6 overflow-y-auto">
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-neutral-900">Güncel Fiyatlar</h2>
            <button className="text-sm font-medium text-green-600">Tümü</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar -mx-6 px-6">
            {['Fındık (Giresun Kalite)', 'Antep Fıstığı (Kavrulmuş)', 'Sıra Ceviz', 'Kuru Kayısı (Gün Kurusu)'].map((item, i) => (
              <div key={i} className="min-w-[200px] bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
                <span className="text-xs font-medium text-neutral-500 mb-1">Bugün</span>
                <span className="font-bold text-neutral-900 leading-tight mb-3 line-clamp-2">{item}</span>
                <div className="mt-auto flex items-end justify-between">
                  <span className="text-xl font-bold text-green-600">{(Math.random() * 100 + 50).toFixed(2)} ₺</span>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">+1.2%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-neutral-900">Öne Çıkan İlanlar</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex gap-4">
                <div className="w-24 h-24 bg-neutral-100 rounded-xl flex items-center justify-center text-4xl">
                  {i === 1 ? '🌰' : i === 2 ? '🌽' : '🌾'}
                </div>
                <div className="flex-1 py-1 flex flex-col">
                  <h3 className="font-bold text-neutral-900 leading-tight">{i === 1 ? '5 Ton Kaliteli Kabuklu Fındık' : i === 2 ? 'Toptan Mısır (Silo)' : 'Yerli Tohum Buğday'}</h3>
                  <p className="text-xs text-neutral-500 mt-1 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> Ordu, Merkez
                  </p>
                  <div className="mt-auto flex items-end justify-between">
                    <span className="font-bold text-neutral-900">125 ₺ <span className="text-xs text-neutral-500 font-normal">/ kg</span></span>
                    <button className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-100 px-6 py-4 flex justify-between items-center pb-safe z-50">
        <button className="flex flex-col items-center text-green-600">
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Ana Sayfa</span>
        </button>
        <button className="flex flex-col items-center text-neutral-400 hover:text-green-600 transition-colors">
          <Search className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Ara</span>
        </button>
        <div className="relative -top-6">
          <button className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-700 transition-colors border-4 border-neutral-50">
            <span className="text-2xl font-light">+</span>
          </button>
        </div>
        <button className="flex flex-col items-center text-neutral-400 hover:text-green-600 transition-colors">
          <Heart className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Favoriler</span>
        </button>
        <button className="flex flex-col items-center text-neutral-400 hover:text-green-600 transition-colors">
          <User className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </nav>
    </motion.div>
  );
}
