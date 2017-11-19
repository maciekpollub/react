import React from 'react';

const Home = () => {
    const handleClick = () => {//def funkcji callback
        alert ('click');
    };
    return (
        <div>


            <button onClick = {handleClick}>Button</button>/*
        </div>
    );

};
export default Home;