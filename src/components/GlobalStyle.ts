import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;  
}
body{
    background: #eee;
    font-family: 'Inter', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;  
    font-family: 'Inter', sans-serif;
    transition: all .5s ease;
 
}
h1{
   
    font-size: 4.5rem;
    color:#23d997;
    font-family: 'Orbitron', sans-serif;
}
h2{
    font-weight: lighter;
    font-size: 3rem;
    margin: 1rem 0;
}
 h3{
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
}
h4{
    font-weight: bold;
    color: #23d997;
}
 span{
    font-weight: bold;
    color: #FE8800;;
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
