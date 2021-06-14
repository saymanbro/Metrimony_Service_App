import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { postBio } from '../../Action/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Bio = () => {
    const dispatch = useDispatch();
    const [ bio, setBio ] = useState({
        gender:'', name:'',email:'', education:'', sibling:'', fname:'', fprofession:'',marrystatus:'', presentadd:'',permanentadd:''
    })

    const handleChange = (e) => {   
            let name = e.target.name;
            let value = e.target.value.toLowerCase();
            let lowerCase = value;         
            setBio({ ...bio, [name] : lowerCase });
            
    }
    const notify = () =>{ 
        toast.success("Bio Data Send Successfully :) ",{
            position: 'top-center'
        } );
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(postBio(bio));
        notify();
        setBio({gender:'', name:'',email:'',  profession:'',education:'', sibling:'', fname:'', fprofession:'',marrystatus:'', presentadd:'',permanentadd:''})
    }
   

    return (
        <>
            <h1 className="text-center my-5 form_section">Create Bio</h1>
  <strong className="text-danger d-block text-center my-2">Special Note : <span className="text-success fw-bold"> All Data Must Have To Fill In English</span> </strong>
                <form onSubmit={handleSubmit}>
                <div className='w-75 w-md-50 mx-auto'>
                       <h6 className="text-center">বায়োডাটার ধরন</h6>
                        <input  name='gender' onChange={handleChange}  value={bio.gender} type="text"  required='required' className="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Boy or Girl" />
                        </div>

                     <h3 className='text-center my-5 text-success' >ব্যক্তিগত তথ্য</h3>
                     <div className="about_u">
                    <h3 className='text-center my-5 text-primary'>শিক্ষাগত যোগ্যতা</h3>
                         <div className="d-md-flex d-block">
                         <div className="form-floating me-md-3 me-0 mb-3 ">
                            <input  name='name' onChange={handleChange}  value={bio.name} type="text"  required='required' className="form-control" placeholder="name" />
                            <label htmlFor="floatingInput">Sure Name </label>
                            </div>
                            <div className="form-floating ms-md-3 ms-0 ">
                            <input  name='email' onChange={handleChange}  value={bio.email} type="text"  required='required' className="form-control" placeholder="email@example.com" />
                            <label htmlFor="floatingInput">Email address </label>
                            </div>
                         </div>
                         <input  name='education' onChange={handleChange}  value={bio.education} type="text" required='required' className='form-control p-3 mt-1 ' placeholder='maximum education' />
                         <div className="form-floating mx-auto mt-2 mt-md-3">
                            <input  name='profession' onChange={handleChange}  value={bio.profession} type="text"  required='required' className="form-control" placeholder="email@example.com" />
                            <label htmlFor="floatingInput">Profession </label>
                            </div>
                     </div>


                     <div className="about_u">
                            <h3 className="text-center my-5 text-primary">পারিবারিক তথ্য</h3>
                            <input  name='sibling' onChange={handleChange}  value={bio.sibling} type="text" className='form-control mb-3 p-3 '  required='required' placeholder='How siblings ?' />
                            <div className="d-md-flex d-block">
                         <div className="form-floating me-md-3 me-0 mb-3 ">
                            <input  name='fname' onChange={handleChange}  value={bio.fname} type="text"  required='required' className="form-control" placeholder="name" />
                            <label htmlFor="floatingInput">Father Name</label>
                            </div>
                            <div className="form-floating ms-md-3 ms-0 ">
                            <input  name='fprofession' onChange={handleChange}  value={bio.fprofession} type="text"  required='required' className="form-control" placeholder="email@example.com" />
                            <label htmlFor="floatingInput">Father's Profession </label>
                            </div>
                         </div>
                     </div>

                     <div className="about_u">
                         <h3 className="text-center my-5 text-primary">বিয়ে সংক্রান্ত তথ্য</h3>
                         <div className="d-md-flex d-block">
                         <div className="form-floating me-md-3 me-0 mb-3 ">
                            <input  name='marrystatus' onChange={handleChange}  value={bio.marrystatus} type="text"  required='required' className="form-control" placeholder="name" />
                            <label htmlFor="floatingInput">অবিবাহিতা/তালাকপ্রাপ্তা/বিধবা </label>
                            </div>
                           
                         </div>
                     </div>


                        <div className="about_u">
                            <h3 className="text-center my-3 text-primary">
                            ঠিকানা
                            </h3>
                            <div className="d-md-flex d-block">

                         <div className="form-floating me-md-3 me-0 mb-3 ">
                            <input  name='presentadd' onChange={handleChange}  value={bio.presentadd} type="text"  required='required' className="form-control" placeholder="name" />
                            <label htmlFor="floatingInput"> Dhaka / Cumilla</label>
                            </div>
                      
                          
                       
                            <div className="form-floating ms-md-3 ms-0 ">
                            <input  name='permanentadd' onChange={handleChange}  value={bio.permanentadd} type="text"  required='required' className="form-control" placeholder="email@example.com" />
                            <label htmlFor="floatingInput"> বর্তমান ঠিকানা</label>
                            </div>
                         </div>
                        </div>

                        <div className="d-grid w-25 mx-auto">
                            <button type="submit" className="btn btn-success"> Send</button>
                        </div>
                </form>
                <ToastContainer />
                <Footer />
        </>
    );
};

export default Bio;