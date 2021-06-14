import React from 'react';

import Finded from '../../Component/FindedBio/Finded';

const FindHome = () => {
  const user = localStorage.getItem('profile');

  if(!user) {
      return (
          <>
          <h1 className="text-center">Please Login</h1>
          </>
      )
  }
   
  
    return (
        <div>
     
              
                     <Finded />
                
        </div>
    );
};

export default React.memo(FindHome);