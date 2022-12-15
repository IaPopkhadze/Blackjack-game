import React, { useContext, useState } from "react";
import StartPage from "../StartPage/StartPage";
import {createContext} from 'react'
import Table from "../Table/Table";

export const  propsContext=createContext(false);
function Pages() {
  const [nickName, setNickname] = useState("");
  const [cash, setCash] = useState(0);
  const [bet, setBet] = useState(null);
  
  return (
    <propsContext.Provider value={{bet, setBet,nickName,setNickname,cash, setCash}}>
      {/* <StartPage /> */}
      <Table/>
    </propsContext.Provider>
  );
}

export default Pages;
