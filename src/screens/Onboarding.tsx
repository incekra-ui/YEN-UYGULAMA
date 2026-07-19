import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, MapPin, Bell, Check, Sprout } from 'lucide-react';
import { UserType } from '../types';

interface OnboardingProps {
  onComplete: () => void;
  user: any;
}

const PRODUCTS = [
  { id: 'findik', name: 'Fındık', emoji: '🌰' },
  { id: 'antep_fistigi', name: 'Antep Fıstığı', emoji: '🥜' },
  { id: 'yer_fistigi', name: 'Yer Fıstığı', emoji: '🥜' },
  { id: 'misir', name: 'Mısır', emoji: '🌽' },
  { id: 'aycicegi', name: 'Ayçiçeği', emoji: '🌻' },
  { id: 'bugday', name: 'Buğday', emoji: '🌾' },
  { id: 'arpa', name: 'Arpa', emoji: '🌾' },
  { id: 'nohut', name: 'Nohut', emoji: '🫘' },
  { id: 'fasulye', name: 'Fasulye', emoji: '🫘' },
  { id: 'mercimek', name: 'Mercimek', emoji: '🫘' },
  { id: 'badem', name: 'Badem', emoji: '🥜' },
  { id: 'ceviz', name: 'Ceviz', emoji: '🌰' },
  { id: 'kuru_uzum', name: 'Kuru Üzüm', emoji: '🍇' },
  { id: 'kuru_kayisi', name: 'Kuru Kayısı', emoji: '🍑' },
];

const USER_TYPES: { id: UserType, label: string }[] = [
  { id: 'Üretici', label: 'Üreticiyim' },
  { id: 'Satıcı', label: 'Satıcıyım' },
  { id: 'Toptancı', label: 'Toptancıyım' },
  { id: 'Fabrika', label: 'Fabrikayım' },
  { id: 'İhracatçı', label: 'İhracatçıyım' },
  { id: 'Bireysel Alıcı', label: 'Bireysel Alıcıyım' },
  { id: 'Kurumsal Firma', label: 'Kurumsal Firma' },
];

export default function Onboarding({ onComplete, user }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<UserType[]>([]);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
    else onComplete();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleProduct = (id: string) => {
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleUserType = (id: UserType) => {
    setSelectedTypes(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.2 }
    })
  };

  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    nextStep();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-neutral-100">
      <div className="w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[600px] flex flex-col relative border border-neutral-100">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-neutral-100">
          <motion.div 
            className="h-full bg-green-500"
            initial={{ width: '20%' }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="flex-1 p-8 pt-12 flex flex-col relative overflow-hidden">
          {step > 1 && (
            <button 
              onClick={handlePrev}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-neutral-100 transition-colors z-10"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-500" />
            </button>
          )}

          <AnimatePresence custom={direction} mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col h-full items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Sprout className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">AgriTrade'e Hoş Geldiniz!</h2>
                <p className="text-neutral-500 text-lg max-w-sm">
                  Tarım ürünleri ticaretini dijitalleştiriyoruz. Alıcılar ve satıcıları güvenli, şeffaf ve hızlı bir platformda buluşturuyoruz.
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col h-full"
              >
                <div className="text-center mb-6 mt-4">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">İlgilendiğiniz Ürünler</h2>
                  <p className="text-neutral-500 text-sm">Hangi tarım ürünleriyle ilgileniyorsunuz? (Çoklu seçim yapabilirsiniz)</p>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <div className="grid grid-cols-2 gap-3 pb-4">
                    {PRODUCTS.map(product => {
                      const isSelected = selectedProducts.includes(product.id);
                      return (
                        <button
                          key={product.id}
                          onClick={() => toggleProduct(product.id)}
                          className={`flex items-center p-4 rounded-2xl border-2 transition-all ${
                            isSelected 
                              ? 'border-green-500 bg-green-50 text-green-800' 
                              : 'border-neutral-100 bg-white hover:border-green-200 text-neutral-700'
                          }`}
                        >
                          <span className="text-2xl mr-3">{product.emoji}</span>
                          <span className="font-medium text-sm text-left leading-tight">{product.name}</span>
                          {isSelected && <Check className="w-4 h-4 ml-auto text-green-600" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col h-full"
              >
                <div className="text-center mb-6 mt-4">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Kullanım Amacınız</h2>
                  <p className="text-neutral-500 text-sm">AgriTrade'i hangi amaçla kullanacaksınız? (Çoklu seçim yapabilirsiniz)</p>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="grid gap-3 pb-4">
                    {USER_TYPES.map(type => {
                      const isSelected = selectedTypes.includes(type.id);
                      return (
                        <button
                          key={type.id}
                          onClick={() => toggleUserType(type.id)}
                          className={`flex items-center p-4 rounded-2xl border-2 transition-all ${
                            isSelected 
                              ? 'border-green-500 bg-green-50 text-green-800' 
                              : 'border-neutral-100 bg-white hover:border-green-200 text-neutral-700'
                          }`}
                        >
                          <span className="font-medium">{type.label}</span>
                          {isSelected && <Check className="w-5 h-5 ml-auto text-green-600" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col h-full items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">Konum İzni</h2>
                <p className="text-neutral-500 text-lg max-w-sm">
                  Yakınınızdaki alıcı ve satıcı ilanlarını size daha hızlı ve doğru gösterebilmemiz için konum iznine ihtiyacımız var.
                </p>
                <button className="px-6 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full font-medium transition-colors text-sm">
                  Şimdilik Geç
                </button>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col h-full items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                  <Bell className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">Bildirimlere İzin Ver</h2>
                <div className="text-neutral-500 text-base max-w-sm space-y-4">
                  <p>Aşağıdaki konularda sizi bilgilendireceğiz:</p>
                  <ul className="text-left space-y-3 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                    <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Fiyat alarmları (Seçtiğiniz ürünlerde)</li>
                    <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Yakınınızdaki yeni ilanlar</li>
                    <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Sektörel haberler</li>
                    <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Özel kampanyalar</li>
                  </ul>
                </div>
                <button className="px-6 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full font-medium transition-colors text-sm">
                  Şimdilik Geç
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        <div className="p-8 pt-4 bg-white border-t border-neutral-50">
          <button
            onClick={handleNext}
            disabled={step === 2 && selectedProducts.length === 0 || step === 3 && selectedTypes.length === 0}
            className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 5 ? 'Başla' : 'Devam Et'}
            {step < 5 && <ArrowRight className="w-5 h-5 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
}
