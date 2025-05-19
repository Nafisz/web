import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-white text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">
          PENDAFTARAN SEKOLAH
        </span>
        <br />
        <span className="text-white">SCIENCEX</span>
      </motion.h1>
      
      <motion.div 
        className="h-1 w-48 bg-gradient-to-r from-transparent via-indigo-600 to-transparent my-8"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 200, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Link 
          to="/register" 
          className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold uppercase rounded-full 
                    hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] transform hover:scale-105 transition-all duration-300
                    border-2 border-cyan-400"
        >
          Registrasi Sekarang
        </Link>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-16 w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-white/70 text-sm">Scroll down untuk informasi lebih lanjut</p>
        <div className="flex justify-center mt-2">
          <svg 
            className="w-6 h-6 text-white/70 animate-bounce" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
