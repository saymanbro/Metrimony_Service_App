import React from 'react';
import Footer from '../Footer/Footer';
import capture from '../ordekDin_img/Capture.PNG';
import computer from '../ordekDin_img/computer.PNG';
import ceremony from '../ordekDin_img/ceremony.PNG';
const Tetorial = () => {
    return (
        <>
                <div className="tutorial_section text-center mb-5">
                     <h1 className=" my-3 my-md-5">
                     মোবাইল দিয়ে বায়োডাটা তৈরির ভিডিও টিউটোরিয়াল
                     </h1>
                      <img src={capture} style={{cursor:'pointer'}} className='img-fluid my-3 my-md-5 px-4' alt='' />

                      <h1 className='my-3 my-md-5'>কম্পিউটার দিয়ে যেভাবে বায়োডাটা তৈরি করবেন</h1>
                      <img src={computer} style={{cursor:'pointer'}} className='my-4 img-fluid px-4 ' alt="" />

                      <h1 className='my-md-5 my-3'>জানুয়ারির ১, ২০২১ ওয়েবসাইট উদ্বোধনী অনুষ্ঠান</h1>
                      <img src={ceremony} style={{cursor:'pointer'}} className='my-4 img-fluid px-4 ' alt="" />
                </div>
                <Footer />
        </>
    );
};

export default Tetorial;