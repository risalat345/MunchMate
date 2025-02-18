import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/frontend_assets/banner.png";
const wordVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: custom * 0.3 },
  }),
}
const Banner = () => {
  const text1 = ["Your", "Favorite", "Food"];
  const text2 = ["Just", "A", "Tap", "Away!"];
  return (
    <div id="#home" className="relative w-full mt-20">
      <img src={banner} alt="Banner" className="w-full h-fit rounded-lg" />
      <div className="absolute top-2 left-36 md:top-16 md:left-90 text-center">
        <div className="flex space-x-1.5 md:space-x-3">
          {text1.map((word, i) => (
            <motion.h1
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="md:text-5xl font-bold text-black"
            >
              {word}
            </motion.h1>
          ))}
        </div>
        <div className="flex space-x-2 md:space-x-3 mt-2">
          {text2.map((word, i) => (
            <motion.h1
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="md:text-5xl text-2xl font-bold text-black"
            >
              {word}
            </motion.h1>
          ))}
        </div>
        <button className="md:px-10 px-5 text-sm md:text-1xl md:py-2 py-1 hover:bg-black hover:text-white transition-all duration-500 font-bold border border-black rounded-lg my-2 md:my-5 cursor-pointer">Order Now</button>
      </div>
    </div>
  )
}
export default Banner;
