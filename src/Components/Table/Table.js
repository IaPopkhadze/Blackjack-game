import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import "./table.css";
import TableImage from "../Assets/Table.jpg";
import { propsContext } from "../Pages/Pages";
function Table() {
  const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

  const { nickName, cash, setCash, bet } = useContext(propsContext);
  const [card, setCard] = useState([]);

  // const seatNumber = Array.from({ length: seatAmount }, (_, i) => ({ id: i }));
  // const API = "https://deckofcardsapi.com/api/deck/new/draw";
  const getDealerData = async () => {
    const result = await axios.get(API);
    setCard(result?.data?.cards);
    console.log(card);
  };

  useEffect(() => {
    getDealerData();
  }, []);

  const playerData = [
    {
      image: card[0]?.images.png,
      value: card[0]?.value,
    },
    {
      image: card[1]?.images.png,
      value: card[1]?.value,
    },
    // {
    //   image: card[2]?.images.png,
    //   value: +card[2]?.value,
    // },
  ];
  return (
    <div className="table">
      <div className="image_container">
        <img className="image" src={TableImage} alt="" />
      </div>
      <div className="table_content">
        <p className="dealer_score">Dealer Shows: </p>
        <div className="dealer_container">
          <div className="dealer_hidden_card">
            <img
              className="hidden_card_image"
              src={card[Math.floor(Math.random() * 52)]?.images.png}
              alt="image"
            />
          </div>
          <div className="dealer_open_card">
            <img
              className="open_card_image"
              src={card[Math.floor(Math.random() * 52)]?.images.png}
              alt="image"
            />
          </div>
        </div>
        <div className="player_container">
          <p>
            {" "}
            {playerData.reduce(
              (first, second) =>
                first +
                (typeof second.value === "1"
                  ? 1
                  : second.value === "2"
                  ? 2
                  : second.value === "3"
                  ? 3
                  : second.value === "4"
                  ? 4
                  : second.value === "5"
                  ? 5
                  : second.value === "6"
                  ? 6
                  : second.value === "7"
                  ? 7
                  : second.value === "8"
                  ? 8
                  : second.value === "9"
                  ? 9
                  : second.value === "10"
                  ? 10
                  : second.value === "A"
                  ? 1
                  : 10),
              0
            )}
          </p>
          {playerData.map((element, index) => {
            return (
              <div key={index} className="each_image_container">
                <img className="each_image" src={element.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="user_total_bank">
        <p>{`${nickName}'s Total Bank: ${cash} $`}</p>
        <p>{`${nickName}'s Current Bet: ${bet} $`}</p>
      </div>
    </div>
  );
}

export default Table;
