import { useState } from 'react';
import { motion } from 'framer-motion';

// Import placeholder image
import placeholderImage from '../assets/images/placeholder.jpg';

const TeamSection = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Quantum',
      role: 'Founder & CEO',
      image: placeholderImage,
      bio: 'Dr. Quantum memiliki latar belakang dalam fisika teoretis dan telah menerbitkan banyak penelitian tentang fisika kuantum dan aplikasinya. Visinya adalah untuk membuat ilmu pengetahuan lebih mudah diakses oleh semua orang.'
    },
    {
      id: 2,
      name: 'Prof. Singularity',
      role: 'Chief Technology Officer',
      image: placeholderImage,
      bio: 'Prof. Singularity adalah ahli dalam komputasi kuantum dan AI. Dia telah mengembangkan beberapa algoritma revolusioner yang mengubah cara kita menangani data ilmiah berskala besar.'
    },
    {
      id: 3,
      name: 'Dr. Nebula',
      role: 'Head of Research',
      image: placeholderImage,
      bio: 'Dr. Nebula memimpin divisi riset di ScienceX dengan fokus pada fenomena kosmologi. Karyanya pada teori multiverse telah mendapatkan pengakuan internasional dari komunitas ilmiah.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden bg-black/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
            Tim ScienceX
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mb-8" />
          <p className="text-white/80 max-w-2xl mx-auto">
            Dipimpin oleh para ahli dan ilmuwan terkemuka di bidangnya, tim ScienceX berkomitmen untuk mendorong batas pengetahuan dan membentuk generasi ilmuwan masa depan.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={itemVariants}
              className="bg-black border-2 border-cyan-400/30 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                
                <button
                  onClick={() => setActiveProfile(activeProfile === member.id ? null : member.id)}
                  className="px-6 py-2 bg-blue-900/30 hover:bg-blue-800/50 text-cyan-400 rounded-full text-sm transition-colors duration-300 border border-cyan-400/50"
                >
                  {activeProfile === member.id ? 'Tutup' : 'Profil'}
                </button>
                
                {activeProfile === member.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white/80 text-sm"
                  >
                    <p>{member.bio}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
