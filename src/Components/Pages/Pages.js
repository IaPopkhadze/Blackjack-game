import React, { useContext, useState } from "react";
import StartPage from "../StartPage/StartPage";
import {createContext} from 'react'

export const  propsContext=createContext(false);
function Pages() {
  const [nickName, setNickname] = useState("");
  const [cash, setCash] = useState(0);
  const [bet, setBet] = useState(null);
  const [seatAmount, setSeatAmount] = useState(1);
  return (
    <propsContext.Provider value={{bet, setBet,nickName,setNickname,cash, setCash,seatAmount, setSeatAmount}}>
      <StartPage />
    </propsContext.Provider>
  );
}

export default Pages;
