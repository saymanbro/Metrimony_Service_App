import React  from 'react';
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
import Bio from './Component/createBio/Bio'
import Finded from './Component/FindedBio/FindHome';
import Details from './Component/BioDetails/Details';
import Message from './Component/Message/Message';
import { useSelector } from 'react-redux';

const App = () => {

   const user =  useSelector(state=> state.Auth);
     const { name } = user;
    return (
       
            
        <>
               <Router>
                    <Navbar />
                    <Message />
                    <Switch>
                       <Route exact path='/'>
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
                        <Route path='/auth' >
                            {name ? <Home /> : <Auth />}
                        </Route>
                      
                        <Route  path='/showBio'>
                        { name ?   <ShowBio /> : <Auth />}   
                            </Route>

                        <Route path='/search'>
                          {name ? <Finded /> : <Auth /> } 
                      </Route >

                        <Route path='/bioDetails/:id'>
                            <Details />                           
                        </Route>

                      <Route  path='/createBio'>
                      { name ? <Bio /> : <Auth />}  
                      </Route>
                   <Route exact path='*'>
                       <Home />
                   </Route>
                    </Switch>
                 </Router>
         </>
      
        
    );
};

export default App;