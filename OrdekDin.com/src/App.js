import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/AboutUs/About';
import AnsQue from './Component/AnsQuestion/AnsQue';
import Tutorial from './Component/Tetorial/Tetorial';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import Auth from './Component/Auth/Auth';
import ShowBio from './Component/ShowBio/ShowBioContainer';
import Bio from './Component/createBio/Bio';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
import Finded from './Component/FindedBio/FindHome';
import Details from './Component/BioDetails/Details';
import ScrollToTop from './Component/ScrollToTop';
import Message from './Component/Message/Message';

export const UserContext = createContext()

const App = () => {
   const [loggedUser, setLoggedUser] = useState({})
    
    return (
        <UserContext.Provider value={[loggedUser, setLoggedUser]}>
            
 <div className='home_container'>
               <Router>
                   <ScrollToTop />
                 <Navbar />
                <Message />
                    <Switch>
                       <Route  path='/home'>
                           <Home />
                       </Route>
                       <Route path='/about' >
                           <About />
                       </Route>
                        <Route path='/ansQue'>
                            <AnsQue />
                        </Route>
                        <Route path='/tutorial'>
                            <Tutorial />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>   
                        <Route path='/auth'  component={Auth} />
                      
                        <Route  path='/showBio'>
                            <ShowBio />
                            </Route>

                        <Route path='/search'>
                          <Finded />
                      </Route >

                        <Route path='/bioDetails/:id'>
                            <Details />                           
                        </Route>

                      <PrivateRoute    path='/createBio'>
                            <Bio />
                      </PrivateRoute>
                   <Route exact path='/'>
                       <Home />
                   </Route>
                    </Switch>
                 </Router>
         </div>
        </UserContext.Provider>
        
    );
};

export default App;