
// To run this file, replace <script type="module" src="./AppComponent.js"></script> with <script type="module" src="./StyledComponent.js"></script> in index.html


import React from 'react';
import ReactDOM from "react-dom/client"

import styled from 'styled-components';

// Creating a styled button component

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

function StyledComponentExample() {
    return (
        <StyledButton>
            Click Me
        </StyledButton>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<StyledComponentExample />)