import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { Screen } from '../App';

interface ForgotPasswordProps {
  onNavigate: (screen: Screen) => void;
}

export default function ForgotPassword({ onNavigate }: ForgotPasswordProps) {
  const [resetMethod, setResetMethod] = useState<'email' | 'sms'>('email');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen flex items-center justify-center p-4 bg-neutral-50"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-100 relative">
        <button 
          onClick={() => onNavigate('login')}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-600" />
        </button>

        <div className="p-8 pt-20">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Şifremi Unuttum</h2>
                  <p className="text-neutral-500">Şifrenizi sıfırlamak için bir yöntem seçin</p>
                </div>

                <div className="flex bg-neutral-100 p-1 rounded-xl mb-8">
                  <button
                    type="button"
                    onClick={() => setResetMethod('email')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                      resetMethod === 'email' ? 'bg-white shadow-sm text-green-700' : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    E-posta ile
                  </button>
                  <button
                    type="button"
                    onClick={() => setResetMethod('sms')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                      resetMethod === 'sms' ? 'bg-white shadow-sm text-green-700' : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    SMS ile
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700 ml-1">
                      {resetMethod === 'email' ? 'E-posta Adresi' : 'Telefon Numarası'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                        {resetMethod === 'email' ? <Mail className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                      </div>
                      <input
                        type={resetMethod === 'email' ? 'email' : 'tel'}
                        className="block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow bg-neutral-50 focus:bg-white"
                        placeholder={resetMethod === 'email' ? 'ornek@eposta.com' : '+90 5XX XXX XX XX'}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Sıfırlama Bağlantısı Gönder
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Bağlantı Gönderildi!</h3>
                <p className="text-neutral-500 mb-8">
                  Şifre sıfırlama talimatları {resetMethod === 'email' ? 'e-posta adresinize' : 'telefonunuza SMS olarak'} gönderildi.
                </p>
                <button
                  onClick={() => onNavigate('login')}
                  className="w-full flex justify-center py-3 px-4 border border-neutral-200 rounded-xl shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Giriş Ekranına Dön
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
