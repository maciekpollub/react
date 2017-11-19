import React from 'react';
import {Button} from 'react-bootstrap';


const Home = () => {
    const handleClick = () => {//def funkcji callback
        alert ('click');
    };
    return (
        <div>
            /*przycisk wywołujący funkcję handleClick*/
            <Button bsStyle = "primary" onClick = {handleClick}>Button</Button>
        </div>
    );

};
export default Home;