import { createContext} from "react";
import { useState } from "react";
import React from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [cardItems, setcardItems] = useState([])
    const addToCard=(itemId)=>{
        if(!cardItems[itemId]){
            setcardItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCard=(itemId)=>{
        setcardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalAmmount=()=>{
        let totalAmount=0;
        for(const item in cardItems){
            if(cardItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item)
       totalAmount+=itemInfo.price * cardItems[item]
        }
       }
       return totalAmount
    }
    const contextValue = {
        food_list,
        cardItems,
        setcardItems,
        addToCard,
        removeFromCard,
        getTotalAmmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;