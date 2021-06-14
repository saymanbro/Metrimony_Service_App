import React from 'react';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <>
                <div className="contact_section">

                    <div className="contact_heading">
                        <h1 className="text-center text-white">যে কোন তথ্য জানতে</h1>                      
                    </div>
                    <p className='text-center mt-5 px-md-5 px-3 text-muted'>আপনার যে কোন জিজ্ঞাসা নিম্নোক্ত ফর্মে পূরণ করে আমাদের কাছে পাঠিয়ে দিন। <br />
                          আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো ইন শা আল্লাহ। 
                          </p>
                    <div className="form_div">
                              <label htmlFor="">নাম</label>
                              <input type="text" className="form-control mt-2 " /> 
                              
                              <br />

                              <label htmlFor="">ইমেইল</label>
                              <input type="text" className="form-control mt-2 " /> 
                              <br />
                              <label htmlFor="">আপনার বার্তা</label>
                               <textarea name="" id="" cols="70" className="form-control mt-2 " rows="10"></textarea>
                               <button className="sendBtn">
                               পাঠান 
                               </button>
                          </div>

                </div>
                <Footer />
        </>
    );
};

export default Contact;