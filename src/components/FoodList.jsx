import React, { useContext} from "react"
import { assets } from "../assets/frontend_assets/assets"
import { StoreContext } from "../context/StoreContext";
const FoodList = ({ id, name, image, price, description }) => {
  const {cardItems,addToCard,removeFromCard}=useContext(StoreContext)
  return (
    <div className="w-60 mx-auto border border-black cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden my-5 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img className="w-full h-50 object-cover" src={image} alt={name} />
      {!cardItems[id] ? (
        <img className="absolute w-10 top-38 right-2"
          onClick={() =>addToCard(id)}
          src={assets.add_icon_white}
          alt="Add"/>):(
        <div className="flex bg-white p-2 rounded-lg m-2 gap-3 items-center absolute top-34 right-0">
          <img
            onClick={() =>removeFromCard(id)}
            src={assets.remove_icon_red}
            alt="Remove"
          />
          <p className="font-bold">{cardItems[id]}</p>
          <img
            onClick={() =>addToCard(id)}
            src={assets.add_icon_green}
            alt="Add"
          />
        </div>
      )}
      <div className="p-4">
        <img className="w-20 mb-2" src={assets.rating_starts} alt="Rating" />
        <h1 className="text-lg font-bold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-600 my-2">{description}</p>
        <p className="text-lg font-bold text-orange-500">${price}</p>
      </div>
    </div>
  );
};

export default FoodList;
