import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export default function Splash() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-green-600 text-white z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="flex flex-col items-center"
      >
        <div className="p-4 bg-white/20 rounded-3xl backdrop-blur-md mb-6 shadow-xl">
          <Leaf className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">AgriTrade</h1>
        <p className="text-green-100 text-lg font-medium">Tarladan Sofraya, Güvenle.</p>
        
        <div className="mt-12 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
              className="w-3 h-3 bg-white rounded-full shadow-md"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
