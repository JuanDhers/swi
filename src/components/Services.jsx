import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./Hero";
import Ine_circle from '../assets/ine_circle_1.png'
import { FaBookReader } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import Wave from '../assets/wave_2.svg'
import WaveRevert from '../assets/wave_2_2.png'
import Confidence from '../assets/icons/Confidence.png'
import Culture from '../assets/icons/culture.png'
import Fluency from '../assets/icons/Fluency.png'
import Grammar from '../assets/icons/Grammar.png'
import Vocabulary from '../assets/icons/Vocabulary_1_2.svg'

const Banner2 = () => {
  return (
    <section >
        <img className="w-full" src={Wave} alt="" />
        <div className="bg-[#FEF08A] p-4 flex justify-center align-center">
            <div className="max-w-3xl ">
        <h2 className="text-4xl md:text-6xl mb-10 text-stone-700 font-title tracking-wides font-bold text-center">Ready to get started?</h2>
        

        {/* Banner Image */}

          


        {/* Banner Text */}
        
          
         
            
            <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">

            <div className="flex pb-8 grid sm:grid-cols-2 md:grid-cols-6 gap-4">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="text-center flex items-center md:col-span-2 gap-4 p-6 bg-[#fff] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl flex-col"
              >
                <div className="flex justify-center items-center flex-col">
                <img className="w-14"  src={Confidence} alt="" />
                <p className="font-bold text-2xl text-amber-400">Build Confidence:</p>
                </div>
                <p className="text-lg">Overcome your fear and gain confidence speaking Spanish.</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="text-center flex items-center md:col-span-2 gap-4 p-6 bg-[#fff] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl flex-col"
              >
                <div className="flex justify-center items-center flex-col">
                <img className="w-14"  src={Fluency} alt="" />
                <p className="font-bold text-2xl text-amber-400">Achieve Fluency:</p>
                </div>
                <p className="text-lg">Practice conversation in every class to improve your fluency.</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="text-center flex items-center col-span-2 gap-4 p-6 bg-[#fff] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl flex-col"
              >
                <div className="flex justify-center items-center flex-col">
                <img className="w-14" src={Grammar} alt="" />
                <p className="font-bold text-2xl text-amber-400">Master Grammar:</p>
              </div>
                <p className="text-lg">Learn grammar with a specialized teacher to understand the rules.</p>
              </motion.div>

              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="text-center flex items-center  md:col-[2/4] gap-4 p-6 bg-[#fff] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl flex-col"
              >
                <div className="flex justify-center items-center flex-col">
                <img className="w-14" src={Vocabulary} alt="" />
                <p className="font-bold text-2xl text-amber-400">Expand Vocabulary:</p>
                </div>
                <p className="text-lg">Enrich your vocabulary through engaging audio, video, and readings.</p>
              </motion.div>

              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="text-center flex items-center md:col-[4/6] gap-4 p-6 bg-[#fff] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl flex-col"
              >
                <div className="flex  justify-center items-center flex-col">
                <img className="w-14" src={Culture} alt="" />
                <p className="font-bold text-2xl text-amber-400">Explore Culture:</p>
                </div>
                <p className="text-lg">Discover Hispanic culture to deepen your understanding of the language.</p>
              </motion.div>


            </div>
          </div>
            </div>


            </div>

      </div>
      {/* <img className="w-full" src={WaveRevert} alt="" /> */}
    </section>
  );
};

export default Banner2;