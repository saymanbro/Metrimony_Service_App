import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import boyImg from '../ordekDin_img/boy.svg';
import girlImg from '../ordekDin_img/hijab.svg';

const Details = () => {
  
const { id} = useParams();
 const bioDetails = useSelector((state) => state.Bio.filter((bio)=> bio._id === id));


    return (
        <div>
            <h1 className='text-center text-info display-4 mt-5'>Bio details </h1>
                <div className="container ">
                    {
                        bioDetails.map((bio)=>(
                           
                            < div key={bio._id} style={{display:'grid', placeItems:'center'}}  className='mt-2'>             

                         
                            <img src={bio.gender === 'boy' ? boyImg : girlImg } style={{width:'250px'}} className='img-fluid mx-auto' alt='img' />
                        

                          <table className='mx-auto'>
                             
                                  <tbody>
                                    <tr className=' mt-3 bg-light'> 
                                          <td>Name : </td> 
                                          <td></td>
                                          <td >
                                            {bio.name}
                                          </td>
                                      </tr>
                                    <tr className=' mt-3 bg-light'> 
                                         <td>Education : </td> 
                                          <td></td>
                                          <td>{bio.education}</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light'> 
                                         <td>Profession : </td> 
                                          <td></td>
                                          <td>{bio.profession.toUpperCase()}</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light'> 
                                         <td>Gender : </td> 
                                          <td></td>
                                          <td>{bio.gender.toUpperCase()}</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light'> 
                                         <td>Marital Status  : </td> 
                                          <td></td>
                                          <td> {bio.marrystatus.toUpperCase()}</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light'> 
                                         <td>Father Name  : </td> 
                                          <td></td>
                                          <td>{bio.fname.toUpperCase() }</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light '> 
                                         <td>Father Profession : </td> 
                                          <td></td>
                                          <td>{bio.fprofession.toUpperCase()}</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light '> 
                                         <td>Siblings  : </td> 
                                          <td></td>
                                          <td>{bio.sibling.toUpperCase()}</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light '> 
                                         <td>Permanent Address : </td> 
                                          <td></td>
                                          <td> {bio.permanentadd.toUpperCase()} </td>
                                      </tr>
                                    <tr className=' mt-3 bg-light '> 
                                         <td>Present Address  : </td> 
                                          <td></td>
                                          <td>{bio.presentadd.toUpperCase()}</td>
                                      </tr>
                                    <tr className=' mt-3 bg-light '> 
                                         <td>Email: </td> 
                                          <td></td>
                                          <td>{bio.email.toUpperCase()}</td>
                                      </tr>
                                  </tbody>
                           
                          </table>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};

export default React.memo(Details);