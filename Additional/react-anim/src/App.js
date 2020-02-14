import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components/macro';

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Grape',
  'Kiwi',
  'Lemon',
  'Pear',
  'Pineapple',
];

const StyledItem = styled.div`
  width: 252px;
  padding: 24px;
  color: #1c1c1c;
  background: #aaaaaa;
  border-bottom: 1px solid #939393;
  transform: ${props => props.visible ? 'translateX(0%)' : 'translateX(100%)'}
  transition: transform 0.5s ease-in-out;
  `;
  
const StyledButton = styled.button`
  width: 300px;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 0;
  font-weight: bold;
  &::-moz-focus-inner {
  border: 0;
  }
  &:hover {
  background-color: #cccccc;
  }
  &:active {
  background-color: #eae9e9;
  }`;

const StyledApp = styled.div`
  width: 300px;
  overflow: hidden;
  background-color: #5e5c5c;`

function Item(props) {
  return(
    <StyledItem>
      { props.name }
    </StyledItem>
  )
};

function App() {

  const [visible, setVisible] = useState(true);
  console.log(visible)

  return (
    <StyledApp>
        <StyledButton onClick={()=>setVisible(!visible)}> 
          TOGGLE
        </StyledButton>
          {fruits.map((fruits, index) => {
            return(
              <Item key={ index } name={ fruits } />
            )
          })}
    </StyledApp>
  );
}

export default App;
