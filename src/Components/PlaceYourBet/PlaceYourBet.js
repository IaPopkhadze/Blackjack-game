import React, { useState, useContext, useRef, useEffect } from "react";
import "./placeYourBet.css";
import Data from "./Data";
import tableImg from "../Assets/Table.jpg";
import Table from "../Table/Table";
import { propsContext } from "../Pages/Pages";
function PlaceYourBet() {
  const messageRef = useRef();
  const { bet, setBet, nickName, setNickname, cash, setCash } =
    useContext(propsContext);
  const handleChoosenBet = (value) => {
    setBet(value);

  };

  useEffect(()=>{
    if (bet > cash) {
      messageRef.current.style.display = "block";
      setTimeout(() => {
        messageRef.current.style.display = "none";
      }, 2000);
    }
  },[bet])
  return (
    <>
      {bet === null || bet > cash ? (
        <div className="placeYourBet">
          <div className="image_container">
            <img className="img" src={tableImg} alt="" />
            <div className="overlay"></div>
            <p className="place_your_bet">Please Place Your Bet</p>
            <div className="bet_container">
              {Data.map((element) => {
                return (
                  <div
                    onClick={() => handleChoosenBet(element.value)}
                    key={element.id}
                    className="each_chip_container"
                  >
                    <img
                      className="chip_image"
                      src={element.image}
                      alt="image"
                    />
                    <p className="chip_value">{element.value}</p>
                  </div>
                );
              })}
            </div>

            <p ref={messageRef} className="error_message">
              {nickName}, you dont have enough money! try again...
            </p>
          </div>
        </div>
      ) : (
        <Table />
      )}
    </>
  );
}

export default PlaceYourBet;
