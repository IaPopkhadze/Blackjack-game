import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './table.css'
function Table() {
  const [card, setCard] = useState(null);
  const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";
  const getData = async () => {
    const result = await axios.get(API);
    setCard(result.data.cards[0].images.svg);
    console.log(card);
  };

  return (
    <div className="table">
      <button onClick={getData}>click</button>
      <img src={card} alt="" />
       <img src={card} alt="" />
    </div>
  );
}

export default Table;
