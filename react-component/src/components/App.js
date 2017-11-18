import React from 'react';   //App jest naszym szablonem do którego należy importować wszystkie  komponenty: Header, Footer....
import Header from './Header'
import Footer from './Footer'

const App = () => {
    return (

        <div>

           <Header/> /*tu musi być z dużej litery i slash aby rozpoznany został jako komponent React-owy*/
            <h1>React exercises</h1>

            Hello world

            <p>paragraph added...</p>

            <Footer/>

        </div>
    );
};

export default App;