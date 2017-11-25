import React from 'react';   //App jest naszym szablonem do którego należy importować wszystkie  komponenty: Header, Footer....
import Counter from './Counter'
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Home from './Home'


import{/*importujemy teraz routera*/
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const App = () => {
    return (
        /*wbudowany komponent react router'owy*/
        <Router>
            <div>
                <Route path='/counter' component={Counter}/>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Footer/>
            </div>
        </Router>



       /* <div>

           <Header/>

            <Home/>

            <Footer/>

        </div>*/
    );
};

export default App;