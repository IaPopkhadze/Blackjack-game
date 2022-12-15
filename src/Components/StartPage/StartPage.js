import React, { useContext, useEffect, useState } from "react";
import "./startPage.css";
import BackgroundImage from "../Assets/Background.jpg";
import Exclamation from "../Assets/exclamation.jpg";
import Table from "../Table/Table";
import { type } from "@testing-library/user-event/dist/type";
import PlaceYourBet from "../PlaceYourBet/PlaceYourBet";
import { propsContext } from "../Pages/Pages";
function StartPage() {
  const {nickName,setNickname,cash, setCash,seatAmount, setSeatAmount}=useContext(propsContext)
  // const [nickName, setNickname] = useState("");
  const [nicknameError, setNickNameError] = useState(false);
  const [nicknameErrorMessage, setNicknameErrorMEssage] = useState("");
  // const [cash, setCash] = useState(0);
  const [cashError, setCashError] = useState(false);
  const [cashErrorMessage, setCashErrorMessage] = useState("");
  // const [seatAmount, setSeatAmount] = useState(1);

  const [startGame, setStartGame] = useState(true);
  const [placeBet, setPlaceBet] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //nickname validation
    if (nickName.length < 4 || nickName.length > 10 || nickName.length === 0) {
      if (nickName.length === 0) {
        setNickNameError(true);
        setNicknameErrorMEssage("Please fill out this field");
      }
      if (nickName.length > 10) {
        setNickNameError(true);
        setNicknameErrorMEssage("Nickname is too long");
      }
      if (nickName.length < 4 && nickName.length != 0) {
        setNickNameError(true);
        setNicknameErrorMEssage("Nickname is too short");
      }
    } else {
      setNickNameError(false);
    }

    //cash validation
    if (cash === 0) {
      setCash(+cash);
      setCashError(true);
      setCashErrorMessage("Please fill out this field");
    } else if (cash > 1000 || (cash < 5 && cash !== 0)) {
      setCash(+cash);
      setCashError(true);
      setCashErrorMessage("Allowed range is: 5$-1000$");
    } else {
      setCashError(false);
    }
    if (
      cashError == false &&
      nicknameError == false &&
      nickName.length != 0 &&
      cash != 0
    ) {
      setPlaceBet(true);
    }
  };
  useEffect(() => {
    if (
      cashError == false &&
      nicknameError == false &&
      nickName.length != 0 &&
      cash != 0
    ) {
      setPlaceBet(true);
    }
  }, [cashError, nicknameError]);

  return (
    <>
      {placeBet ? (
        <PlaceYourBet />
      ) : (
        <div className="startPage">
          <div className="imageContainer">
            <img src={BackgroundImage} alt="" />
          </div>
          <div className="overlay"></div>
          {startGame ? (
            <div className="contentContainer">
              <h1 className="casino_name">Welcome To Ia's Casino</h1>
              <div onClick={() => setStartGame(false)} className="start_btn">
                Get Started Now
              </div>
            </div>
          ) : (
            <div className="registration">
              <form onSubmit={handleSubmit} action="">
                <div className="input_container">
                  <label className="my_label" htmlFor="">
                    Enter Your Name:{" "}
                  </label>
                  <input
                    value={nickName}
                    onChange={(e) => setNickname(e.target.value)}
                    className="my_input"
                    type="text"
                    required
                  />
                  {nicknameError ? (
                    <div className="errorMessageContainer">
                      <div className="errorSquare"></div>
                      <div className="ExclamationContainer">
                        <img className="exclamation" src={Exclamation} alt="" />
                      </div>
                      <p>{nicknameErrorMessage}</p>
                    </div>
                  ) : null}
                </div>
                <div className="input_container">
                  <label className="my_label" htmlFor="">
                    Enter The Total Cash:{" "}
                  </label>
                  <input
                    onChange={(e) => setCash(e.target.value)}
                    className="my_input"
                    type="number"
                    required
                  />
                  {cashError ? (
                    <div className="errorMessageContainer">
                      <div className="errorSquare"></div>
                      <div className="ExclamationContainer">
                        <img className="exclamation" src={Exclamation} alt="" />
                      </div>
                      <p>{cashErrorMessage}</p>
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="startGame"
                >
                  Start Game
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default StartPage;
