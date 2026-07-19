import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';
import { Screen } from '../App';

interface LoginProps {
  onNavigate: (screen: Screen) => void;
  onLogin: (user: any) => void;
}

export default function Login({ onNavigate, onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone' | 'username'>('email');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ name: 'Test User' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center p-4 bg-neutral-50"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hoş Geldiniz</h2>
            <p className="text-neutral-500">Devam etmek için giriş yapın</p>
          </div>

          <div className="flex bg-neutral-100 p-1 rounded-xl mb-6">
            {(['email', 'phone', 'username'] as const).map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setLoginMethod(method)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                  loginMethod === method ? 'bg-white shadow-sm text-green-700' : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                {method === 'email' ? 'E-posta' : method === 'phone' ? 'Telefon' : 'Kullanıcı Adı'}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-700 ml-1">
                {loginMethod === 'email' ? 'E-posta Adresi' : loginMethod === 'phone' ? 'Telefon Numarası' : 'Kullanıcı Adı'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  {loginMethod === 'email' ? <Mail className="h-5 w-5" /> : loginMethod === 'phone' ? <Phone className="h-5 w-5" /> : <User className="h-5 w-5" />}
                </div>
                <input
                  type={loginMethod === 'email' ? 'email' : loginMethod === 'phone' ? 'tel' : 'text'}
                  className="block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                  placeholder={loginMethod === 'email' ? 'ornek@eposta.com' : loginMethod === 'phone' ? '+90 5XX XXX XX XX' : 'kullaniciadi'}
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

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-neutral-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
                  Beni Hatırla
                </label>
              </div>

              <div className="text-sm">
                <button type="button" onClick={() => onNavigate('forgot-password')} className="font-medium text-green-600 hover:text-green-500">
                  Şifremi Unuttum
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors mt-6"
            >
              Giriş Yap
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neutral-500">veya şununla devam et</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-neutral-200 rounded-xl shadow-sm bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-neutral-200 rounded-xl shadow-sm bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.365 21.46c-1.353 1.405-2.73 1.385-4.015.72-1.29-.675-2.74-.675-4.045 0-1.28.665-2.585.735-3.87-.58-5.32-5.325-6.61-12.8-2.6-17.135 1.83-1.97 4.14-2.2 5.56-2.25 1.63-.06 3.125.99 4.02 1.015 1-.02 2.76-1.125 4.675-1 2.375.14 4.135 1.17 5.14 2.825-4.415 2.345-3.69 8.245.925 10.02-1.045 2.765-2.52 5.385-4.79 7.385h-.005zm-4.71-20.455c-.245 2.12-1.745 4.14-3.805 4.545-.36-2.3 1.255-4.42 3.615-4.73.06.06.13.12.19.185z" />
                </svg>
                Apple
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-50 px-8 py-6 border-t border-neutral-100 text-center flex flex-col space-y-3">
          <p className="text-sm text-neutral-600">
            Hesabınız yok mu?{' '}
            <button onClick={() => onNavigate('register')} className="font-medium text-green-600 hover:text-green-500">
              Kayıt Ol
            </button>
          </p>
          <button onClick={() => onNavigate('dashboard')} className="text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors">
            Misafir Olarak Devam Et
          </button>
        </div>
      </div>
    </motion.div>
  );
}
