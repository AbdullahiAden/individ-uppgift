import styled from "styled-components"

const Buttons= styled.button`
background-color : ${props =>(props.primary ? "#0e65f0" : "#12a339")};
border: none;
color: white;
text-align: center;
margin: 20px;
font-size: 26px;
font-weight: bold;

border-radius: 7px;
width: 50%;
display: inline-block;

`
export {Buttons}

