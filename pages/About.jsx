import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        style={{ opacity }}
        className="flex gap-5 text-7xl text-white font-bold"
      >
        <span>Understand</span>
        <span>The</span>
        <span>Universe</span>
      </motion.div>
      <p className="text-2xl text-white/80 mt-5">
        Yayasan ScienceX: Yayasan ini didirikan oleh... tahun... bertujuan untuk...
      </p>
    </div>
  );
};

export default About;
