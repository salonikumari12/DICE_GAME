import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styled/Button';
const StartGame = (props) => {

  const toggle = props.toggle;
  return (
    <Container >

     <div>
     <img src="./images/dices.png" alt="" />
      
     </div>
       
      <div className='content'>
          <h1>Dice Game</h1>
          <Button onClick={toggle}> Play Now </Button>

      </div>
      
    </Container>
  )
}



export default StartGame


const Container = styled.div`
display: flex;
max-width: 1180px;
height: 100vh;
margin: 0 auto;
align-items: center;
justify-content: center;

.content {
  text-align: center;

h1 {
  font-size: 5rem; /* large on desktop */
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  /* margin-top: 1rem; */
  cursor: pointer;
}

@media (max-width: 768px) {
  margin: 30px;
  h1 {
    font-size: 3rem; /* smaller on mobile */
    margin: 15px;
  }

  

  button {
    font-size: 0.9rem;
    padding: 0.9rem 1.2rem;
  }
}
}



@media (max-width: 768px) {
    flex-direction: column;
     

    img {
       margin: 10px;
      width: 90%;       /* or any percentage you prefer */
      max-width: 330px; /* optional: max size */
      height: auto;     /* maintain aspect ratio */
        
      
    } 
  }


`


 