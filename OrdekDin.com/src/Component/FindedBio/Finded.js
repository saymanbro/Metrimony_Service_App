import React from 'react';
import { useSelector } from 'react-redux';
import User from '../../Component/FindedBio/User';

const Finded = () => {
    const findedBio = useSelector((state) =>state.Bio)
   
    return (
        <div className='container-fluid'>
            <h1 className="text-info text-center mt-3"> By Searching <span className="text-dark">{findedBio.length}</span> Bio Data Founded</h1>
            <div className="row">
            {
                    findedBio.map((bio, index) =>
                       (
                        <User key={bio._id} bio={bio} index={index} />
                       )
                    )
                }
            </div>
            
               
        </div>
    );
};

export default React.memo(Finded);