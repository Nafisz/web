/* src/pages/Home.js */
import Hero from '../components/Hero';
import TeamSection from '../components/TeamSection';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../particlesConfig';

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative">
      <Particles id="particles-js" init={particlesInit} options={particlesConfig} className="absolute inset-0 z-0" />
      <Hero />
      <TeamSection />
    </div>
  );
};

export default Home;
