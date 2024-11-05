import { MdOutlineCalendarMonth } from "react-icons/md";
import { motion } from "framer-motion"; //animate
import Ine_circle from '../assets/ine_circle_1.png';
import swi_hero_img from '../assets/swi_hero_img.png';

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center  h-auto ">{/*bg-gradient-to-t from-yellow-200 via-purple-500 to-amber-100 */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around pb-16 lg:py-16 px-6 lg:px-16 w-full lg:max-w-7xl">
        
        {/* Text Section */}
        <div className="lg:w-2/3 w-full text-center lg:text-left px-6 lg:px-12">
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-6xl lg:text-8xl text-stone-700 font-title font-bold tracking-wide"
          >
            Speak Spanish from <span className="text-amber-400">class one</span>!
          </motion.h1>

          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            className="mt-4 lg:mt-2 mb-8 text-xl lg:text-2xl text-stone-500"
          >
            No matter your level, everyone can speak Spanish! <br />
            Our classes use a conversational approach to help you get comfortable with the language right from the start.
          </motion.h3>

          {/* Call to Action Button */}
          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="flex justify-center lg:justify-start"
          >
            <button className="bg-amber-500 font-bold py-3 px-6 rounded-md text-white flex items-center group">
              Book your class
              <MdOutlineCalendarMonth className="ml-2 text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end mb-4">
          <img src={swi_hero_img} alt="Ines" className="w-64 lg:w-96 h-auto" />
        </div>
      </div>
    </section>
  );
};
