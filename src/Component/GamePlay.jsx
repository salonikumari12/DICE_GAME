import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();

  const [currentDice, setCurrentDice] = useState(1);

  const [score, setScore] = useState(0);

  const [error, setError] = useState("");


  const [showRules , setShowRules] = useState(false)

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  console.log(generateRandomNumber);

  const roledice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    setError("");

    const randomNumber = generateRandomNumber(7, 1);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} roledice={roledice} />
       <div className="btns">
       <OutlineButton onClick={()=>setScore(0)}>Reset Score</OutlineButton>
       <Button onClick={()=>setShowRules((prev)=>!prev)}> {showRules ?"Hide": "Show" } rules</Button>
       </div>

     { showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 30px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    /* margin-top:30px; */
  }

  .btns{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }

  @media (max-width: 768px) {
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 54px;
    }
  }
`;
