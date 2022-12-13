import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import "./table.css";
import TableImage from "../Assets/Table.jpg";
import { propsContext } from "../Pages/Pages";
function Table() {
  // const [card, setCard] = useState(null);
  // const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";
  // const getData = async () => {
  //   const result = await axios.get(API);
  //   setCard(result.data.cards[0].images.svg);
  //   console.log(card);
  // };
  const { nickName, cash, setCash, bet, seatAmount } = useContext(propsContext);

  const [card, setCard] = useState([]);
  const randomIndex = Math.floor(Math.random() * 52);
 
  const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    const getData = async () => {
       await axios.get(API)
       .then(response=>setCard(response.data))
       .catch(error=>console.error(error))
      // setCard(result.data.cards);
     
    };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="table">
      <div className="image_container">
        <img className="image" src={TableImage} alt="" />
      </div>
      <div className="table_content">
        <p className="dealer_score">Dealer Shows: {card.cards[0]?.value}</p>
     
        <div className="dealer_container">
          <div className="dealer_hidden_card">
            <img
              className="hidden_card_image"
              src={card.cards[0]?.images.png}
              alt="image"
            />
          </div>
          <div className="dealer_open_card">
            <img
              className="open_card_image"
              src={card.cards[1]?.images.png}
              alt="image"
            />
          </div>
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
