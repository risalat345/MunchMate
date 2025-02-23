import React from "react";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: custom * 0.3 },
  }),
};

const Banner = () => {
  const text1 = ["Your", "Favorite", "Food"];
  const text2 = ["Just", "A", "Tap", "Away!"];

  return (
    <div id="#home" className="bg-orange-600 w-full mt-20 h-fit md:flex">
      {/* Left Side */}
      <div className="left md:w-6/12 flex justify-center items-center">
        <img
          width={250}
          className="md:w-[300px] w-[200px]"
          src="https://static.vecteezy.com/system/resources/previews/023/743/925/non_2x/scooter-with-delivery-man-flat-cartoon-character-fast-courier-restaurant-food-service-mail-delivery-service-a-postal-employee-the-determination-of-geolocation-using-electronic-device-free-png.png"
          alt=""
        />
      </div>

      {/* Right Side */}
      <div className="right md:w-6/12 flex justify-center items-center p-5 md:p-14">
        <div className="text-center">
          <div className="flex space-x-1 md:space-x-3 justify-center">
            {text1.map((word, i) => (
              <motion.h1
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="text-3xl md:text-4xl font-bold text-black"
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <div className="flex space-x-1 md:space-x-3 mt-2 justify-center">
            {text2.map((word, i) => (
              <motion.h1
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="text-2xl md:text-4xl font-bold text-black"
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <button className="px-5 md:px-10 text-base md:text-md py-1 md:py-2 hover:bg-black hover:text-white transition-all duration-500 font-bold border border-black rounded-lg my-3 md:my-5 cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
