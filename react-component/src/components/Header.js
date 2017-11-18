import React from 'react' ;
import Menu from './Menu';//importujemy  Menu do Headera - zgodnie ze strukturą strony...
import obrazek from '../logo.svg';//importtowanie obrazka do pliku odpowiadającego elementowi struktury Dom w którym chcemy mieć obrazek
//import './logo.css';


//teraz wprowadzamy obiekt logoStyle, który inline'owo ostyluje nam obrazek
const logoStyle = {
  width: '100px',
  height: '120px',
    fontSize: '30px'
};

const Header  = () => {
    return(
        <div className = 'header'>
            To jest header!
            <img style = {logoStyle}
                 src = {obrazek}/>;
            <Menu/>
        </div>
    )
};

export default Header;