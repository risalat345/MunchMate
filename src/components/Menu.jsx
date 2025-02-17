import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const Menu = ({ category, setcategory }) => {
  return (
    <div id="menu" className="flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Explore Our Menu</h1>
        <p className="text-sm w-2/3 mx-auto">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining experience,
          one delicious meal at a time.
        </p>
      </div>

      {/* Menu Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setcategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
            className="flex flex-col items-center cursor-pointer transition-all duration-200"
          >
            {/* Menu Image with Invisible Border Fix */}
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`p-3 rounded-lg transition-all duration-300 border-2 ${
                category === item.menu_name ? "border-black scale-105 bg-green-400" : "border-transparent"
              }`}
            />
            <p className="mt-2 font-semibold">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
