import React  from 'react';
import {  useHistory } from 'react-router-dom';

import bio_img from '../ordekDin_img/boy.svg';
import bio_img_girl from '../ordekDin_img/hijab.svg';


const ShowBio = ({bio, index}) => {
const history = useHistory();
const openBio = ()  => history.push(`/bioDetails/${bio._id}`)
    return (
        <>
            
                 <div className="col-12 col-sm-6 col-md-4">

                        <div className="card my-3">
                            <div className="bio_type">
                                <img src={ bio.gender === 'boy' ? bio_img : bio_img_girl} className='mx-auto' alt="" />
                            <h6 className='my-2'>Bio Data Number</h6>
                            <h6>{index + 1}</h6>
                            </div>
                            <div className="bio_text mx-auto">
                            <table className="">
                                <tbody>
                                <tr >
                                    <td>বৈবাহিক অবস্থা :</td>
                               
                                    <td className='text-center ps-1'>{bio.marrystatus}</td>
                                </tr>
                                
                                <tr >
                                    <td>শিক্ষাগত যোগ্যতা :</td>
                                
                                    <td className='text-center ps-1'>{bio.education}</td>
                                </tr>
                                <tr >
                                    <td>পেশা :</td>
                                
                                    <td className='text-center ps-1'>{bio.profession}</td>
                                    
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="d-grid px-5">
                            <button onClick={openBio} className="seeBtn">See Detail</button>
                            </div>
                            
                        </div>  



                        </div> 
               
        </>
    );
};

export default ShowBio;