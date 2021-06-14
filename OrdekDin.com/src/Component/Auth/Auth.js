import React, { useContext, useEffect } from 'react';
import {FcGoogle} from 'react-icons/fc'
import {GoogleLogin} from 'react-google-login';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedUserInLocalStorage } from '../../Action/action';
const Auth = () => {
    const [loggedUser,setLoggedUser] = useContext(UserContext)
    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation()
    const { token } = loggedUser;
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSuccess = async (res) => {
        const result = res?.profileObj;
       const   token = res?.tokenId ;
        setLoggedUser(result); 
        history.replace(from);
        dispatch(loggedUserInLocalStorage(token))

    }


    
    const googleError = (e) => ('Google Sign In was unsuccessful. Try again later'+ e);
   
    return (
        <>
            <div className="auth_section">
                    <div className="login_box mt-5">
                        <h1 className="text-center py-4">Log In</h1>
                        
                        <label htmlFor="UserName">Username or Email Address </label>
                        <input type="text" className="form-control" /> <br />

                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" /> <br />

                            <div className="d-grid">
                                <button className="btn btn-primary">Login</button>
                              
                            </div>

                            
                           


                <GoogleLogin
            clientId="168243066105-vokcl0jkkaie97t41m893fr8ghdr7klk.apps.googleusercontent.com"
            render={(renderProps) => (
                <div className="google_login mt-5">

                <button onClick={renderProps.onClick} className="login_btn  mb-5 rounded"> <FcGoogle /> <span className="">Continue With <strong className="text-dark">Google</strong> </span> </button>
                         </div>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />


                            <hr  className='mt-3'/>
                            
                    </div>
                   
            </div>
         
        </>
    );
};

export default Auth;