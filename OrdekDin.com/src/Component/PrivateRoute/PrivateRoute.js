import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const  PrivateRoute = ({ children, ...rest }) => {

 const [loggedUser] = useContext(UserContext);



    return (
        <>
            <Route
              {...rest}
              render={({ location }) =>
                loggedUser.email ? (
                  children
                ) : (
                  <Redirect
                    to={{
                      pathname: "/auth",
                      state: { from: location }
                    }}
                  />
                )
              }
    /> 
        </>
    );
};

export default PrivateRoute;