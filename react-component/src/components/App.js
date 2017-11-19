import React from 'react';   //App jest naszym szablonem do którego należy importować wszystkie  komponenty: Header, Footer....
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

const App = () => {
    return (

        <div>

           <Header/>

            <Home/>

            <Footer/>

        </div>
    );
};

export default App;