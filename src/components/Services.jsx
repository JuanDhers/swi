import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./Hero";
import Wave from '../assets/wave_2.svg';
import Confidence from '../assets/icons/Confidence.png';
import Culture from '../assets/icons/culture.png';
import Fluency from '../assets/icons/Fluency.png';
import Grammar from '../assets/icons/Grammar.png';
import Vocabulary from '../assets/icons/Vocabulary_1_2.svg';

const Services = () => {
  return (
    <section>
      {/* <img className="w-full" src={Wave} alt="Wave" /> */}
      <div className="p-4 flex justify-center items-center">
        <div className="max-w-80 md:max-w-4xl">
          <h2 className="text-4xl md:text-6xl mb-10 text-stone-700 font-title tracking-wide font-bold text-center">
            Ready to get started?
          </h2>

          {/* Contenedor responsive con grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-xl"
            >
              <img className="w-14" src={Confidence} alt="Confidence" />
              <p className="font-bold text-2xl text-amber-400">Build Confidence:</p>
              <p className="text-lg">Overcome your fear and gain confidence speaking Spanish.</p>
            </motion.div>

            <motion.div
              variants={FadeUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-xl"
            >
              <img className="w-14" src={Fluency} alt="Fluency" />
              <p className="font-bold text-2xl text-amber-400">Achieve Fluency:</p>
              <p className="text-lg">Practice conversation in every class to improve your fluency.</p>
            </motion.div>

            <motion.div
              variants={FadeUp(0.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-xl"
            >
              <img className="w-14" src={Grammar} alt="Grammar" />
              <p className="font-bold text-2xl text-amber-400">Master Grammar:</p>
              <p className="text-lg">Learn grammar with a specialized teacher to understand the rules.</p>
            </motion.div>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-xl"
            >
              <img className="w-14" src={Vocabulary} alt="Vocabulary" />
              <p className="font-bold text-2xl text-amber-400">Expand Vocabulary:</p>
              <p className="text-lg">Enrich your vocabulary through engaging audio, video, and readings.</p>
            </motion.div>

            <motion.div
              variants={FadeUp(1.0)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-2xl duration-300 shadow-xl"
            >
              <img className="w-14" src={Culture} alt="Culture" />
              <p className="font-bold text-2xl text-amber-400">Explore Culture:</p>
              <p className="text-lg">Discover Hispanic culture to deepen your understanding of the language.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
