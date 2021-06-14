import React from 'react';
import ShowBio from './ShowBio';
import { useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


const ShowBioContainer = () => {
   
const bio = useSelector((state) => state?.Bio);
const user = localStorage.getItem('profile');
const history = useHistory()

if(!user){
    return(
        <>
            <h2 className='mt-5 pt-5 text-warning text-center'>Please Log in</h2>
            <div className=" d-grid  d-md-block text-center mt-5 ">
            <button className="btn btn-primary mx-5" onClick={() => history.push('/auth')}>Click to Log in</button>
            </div>
        </>
       
    )
}
    return (
        <>
      <h1 className="text-center my-5"> বায়োডাটা সমূহ </h1>
      <h1 className="text-center my-5"> Total <span className='text-primary'>{bio.length} </span> Bio Data Has Been Created</h1>

                <div className="container">
                       
                        <div key={bio._id} className='container'>
                            <div className="row">
                        {
                            bio.map((bio, index)=> (
                               
                                <ShowBio key={bio._id} index={index} bio={bio}  />
                        
                            ))
                            
                        }
                        
                            </div>
                        </div>
                    </div>
            
       
               
        </>
    );
};

export default ShowBioContainer;