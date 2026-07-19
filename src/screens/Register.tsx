import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, User, Phone, ArrowLeft, Camera } from 'lucide-react';
import { Screen } from '../App';

interface RegisterProps {
  onNavigate: (screen: Screen) => void;
}

export default function Register({ onNavigate }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen flex items-center justify-center p-4 bg-neutral-50 py-12"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-100 relative">
        <button 
          onClick={() => onNavigate('login')}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-600" />
        </button>

        <div className="p-8 pt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hesap Oluştur</h2>
            <p className="text-neutral-500">AgriTrade ailesine katılın</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-neutral-100 border-2 border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">
                <User className="w-10 h-10" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-green-600 rounded-full text-white shadow-lg hover:bg-green-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate('login'); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-neutral-700 ml-1">Ad</label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder="Adınız"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-neutral-700 ml-1">Soyad</label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder="Soyadınız"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 ml-1">Kullanıcı Adı</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder="kullaniciadi"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 ml-1">Telefon</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <Phone className="h-5 w-5" />
                </div>
                <input
                  type="tel"
                  className="block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder="+90 5XX XXX XX XX"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 ml-1">E-posta</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder="ornek@eposta.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 ml-1">Şifre</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="block w-full pl-10 pr-10 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 ml-1">Şifre Tekrar</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="block w-full pl-10 pr-10 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors mt-8"
            >
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
