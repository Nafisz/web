const Location = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <p className="text-2xl text-white mb-8">This is a futuristic location page.</p>
      <button
        onClick={() => window.open('https://maps.google.com', '_blank')}
        className="px-10 py-4 text-xl uppercase text-white bg-gradient-to-r from-black to-indigo-900 border-2 border-cyan-400 rounded-xl hover:shadow-[0_0_25px_#00e5ff] hover:-translate-y-1 transition-all duration-300"
      >
        Open In Maps
      </button>
    </div>
  );
};

export default Location;
