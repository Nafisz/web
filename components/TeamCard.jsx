/* src/components/TeamCard.js */
const TeamCard = ({ name, role, image }) => {
  return (
    <div className="relative bg-gray-900/95 border-2 border-cyan-400 p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,243,255,0.27)] overflow-hidden">
      <div className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_#00f3ff]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl text-cyan-400 mb-2">{name}</h3>
      <p className="text-blue-400">{role}</p>
      <button className="mt-4 px-8 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-black rounded-3xl hover:shadow-[0_0_15px_#00f3ff] transition-all duration-300">
        Profil
      </button>
    </div>
  );
};

export default TeamCard;