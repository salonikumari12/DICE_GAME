 
import styled from "styled-components"

const RoleDice = ({currentDice,roledice}) => {
   
 
   




  return (
    <DiceContainer>


      <div className="dice"  onClick={roledice}>
        
          <img src={`/images/dice/dice${currentDice}.png`} alt="" />
      </div>

      <p>
        Click on Dice to Roll
      </p>
      
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
   margin-top: 48px;
    
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   p{
    font-size: 24px;
   }

   .dice{
    cursor: pointer;
   }

   @media (max-width: 768px){
     
      .dice img{
        margin-top:0px;
        height:145px;
      }
   }



`




