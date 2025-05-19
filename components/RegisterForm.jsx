/* src/components/RegisterForm.js */
import { useNavigate } from 'react-router-dom';
import MathBackground from './MathBackground';

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (level) => {
    const urls = {
      paud: 'https://contoh.link/paud',
      sma: 'https://contoh.link/sma',
    };
    window.location.href = urls[level];
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      <MathBackground />
      <div className="relative z-10 p-16 text-center">
        <h2 className="text-4xl uppercase text-cyan-400 mb-4 tracking-widest">
          Pilih Jenjang Pendidikan
        </h2>
        <p className="text-xl text-gray-200 mb-10">
          <small>Pendaftaran dibuka untuk tahun ajaran 2025/2026</small>
        </p>
        <div className="flex justify-center flex-wrap gap-5 mt-10">
          <button
            onClick={() => handleSubmit('paud')}
            className="bg-cyan-400/10 border border-cyan-400 rounded-xl p-6 w-48 text-center text-white hover:bg-cyan-400/20 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl mb-2">KB</h3>
            <p className="text-blue-400">Pendidikan Anak Usia Dini</p>
          </button>
          <button
            onClick={() => handleSubmit('sma')}
            className="bg-cyan-400/10 border border-cyan-400 rounded-xl p-6 w-48 text-center text-white hover:bg-cyan-400/20 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl mb-2">MAS</h3>
            <p className="text-blue-400">Madrasah Aliyah Swasta</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
