import React from 'react';   //App jest naszym szablonem do którego należy importować wszystkie  komponenty: Header, Footer....
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Home from './Home'
import{/*importujemy teraz routera*/
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => {
    return (
        /*wbudowany komponent react router'owy*/
        <Router>
            <div>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/profile">Profile</Link></li>
                    <li><Link to ="/dashboard">Dashboard</Link></li>
                </ul>

                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>
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