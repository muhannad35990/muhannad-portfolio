import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;  
}
body{
    background: #1b1b1b;

}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid #23d997;
    background: transparent;
    color: white;
    transition: all .5s ease;
    &:hover{
    background-color: #23d997;
    color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 2rem;
    margin: 1rem 0;
}
 h3{
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
     
    color: #FE8800;
}
h4{
    font-weight: bold;
    color: #23d997;
}
 span{
    font-weight: bold;
    color: #23d997;
 }
 a{
font-size: 1.1rem;
 }
p{  
    color:#ccc;
    font-size: 1rem;
}
 
`;

export default GlobalStyle;
