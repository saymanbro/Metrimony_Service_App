import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, } from 'react-router-dom';
import logo from '../ordekDin_img/logo.png';


const Navbar = () => {

 const [ sideBar , setSideBar ] = useState(false);
 const showMenu = () =>  setSideBar(!sideBar)
 const user = useSelector(state=> state.Auth);
    const {name} = user

 const logout = () => {
       localStorage.clear();
     window.location.replace('/login')
 }




    return (
        <>
                <div className="navbar_section sticky-top bg-light">
                    <nav >
                     <div className="logo order-2 ms-5 ms-md-0 order-md-1">
                         <img src={logo} className='img-fluid' alt="" />
                         </div>  
                    
                          <div className=" d-md-none d-block">
                          <div className={ sideBar ? 'menu_bar active': 'menu_bar'}>
                        <i onClick={showMenu} className="fas fa-bars" style={{fontSize:'23px', color:'#6c0092'}}></i>
                        </div>

                        <div className= { sideBar ? 'nav_menu_bar active': "nav_menu_bar"} onClick={showMenu}>
                            <button className='closeBtn'><i className="fas fa-times"></i></button>
                           
                           <ul>                                  
                                <li><Link to='/' className='nav_link'>Home</Link></li>  
                                <li><Link to='/about' className='nav_link'>About</Link></li>
                                <li><Link to='/ansQue' className='nav_link'>Ans Que</Link></li>
                                <li><Link to='/tutorial' className='nav_link'>Tutorial</Link></li>
                                <li><Link to='/contact' className='nav_link'>Contact</Link></li>
                           </ul>          
                        </div> 
                          </div>

                         <div className="nav_menu d-none d-md-block order-1 order-md-2">
                           <ul>                                  
                                <li><Link to='/' exact='true' className='nav_links'>Home</Link></li>  
                                <li><Link to='/about'   className='nav_links'>About</Link></li>
                                <li><Link to='/ansQue'   className='nav_links'>Ans Que</Link></li>
                                <li><Link to='/tutorial'   className='nav_links'>Tutorial</Link></li>
                                <li><Link to='/contact'   className='nav_links'>Contact</Link></li>
                           </ul>          
                        </div> 
                           
                      
                        <div className="log_btn order-3 order-md-3">

                          {
                             name ?
                              <>
                               <span className="me-md-4 me-1 user_name"> {user?.name?.charAt(0).toUpperCase()} </span>
                                <button className='logoutBtn'  onClick={logout}> Logout </button>
                               </>
                               :
                               <button className='loginBtn' > <Link to="/auth" className='nav_links'><i className="fas fa-user-alt me-2"></i> <span className="d-none d-md-inline">Login</span> </Link> </button>
                               

                             
                          }
                          
                            
                                 
                            
                        </div>
                    </nav>    
                </div>   
        </>
    );
};

export default Navbar;