 
import styled from "styled-components";

const NumberSelector = ({setError, error ,selectedNumber , setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler =  (value)=>{
    setSelectedNumber(value);
    setError("");
  }
 

  return (
    <NumberSelecterContainer>
      <p style={{color:'red'}}>{error}</p>
      <div className="flex">
         
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={()=>numberSelectorHandler(value)}
          >
            {" "}
            {value}{" "}
          </Box>
        ))}



      </div>
      <p>Select a Number</p>
    </NumberSelecterContainer>
  );
};

export default NumberSelector;

const NumberSelecterContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap; /* wrap on smaller screens */
    justify-content: flex-end;
    /* background-color:blue; */

    @media (max-width: 600px) {
      width:60%;
      gap: 12px;
      justify-content: center;
      margin: 0 auto;
      
    }
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 16px;

    @media (max-width: 600px) {
      font-size: 18px;
      text-align: center;
      width: 100%;
    }
  }


`;

const Box = styled.div`
   height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;

  @media (max-width: 600px) {
    height: 55px;
    width: 55px;
    font-size: 20px;
  }

`;
