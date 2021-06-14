import React from 'react';
import Footer from '../Footer/Footer';


const AnsQue = () => {
    return (
        <>
                    <div className="ans_question_section  ">
                  
                       <div className="ans_content border border-light p-3 rounded">
                       <h2 className=' text-center my-5'>সাধারণ প্রশ্ন ও উত্তর</h2>
                       <div className="accordion accordion-flush" id="accordionFlushExample">
                       <div  className="accordion-item">
                            <h2  className="accordion-header" id="headingOne">
                            <button  className="accordion-button  qus_heading" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            বায়োডাটা জমা দিতে কত টাকা লাগে?
                            </button>
                            </h2>
                            <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div  className="accordion-body">
                            আমরা এখন পর্যন্ত কারো কাছ থেকে টাকা নিচ্ছি না।
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" style={{color:'#5A1286'}} id="flush-headingTwo">
                            <button className="accordion-button qus_heading  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার মুসলিমদের জন্য। 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button  qus_heading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            বায়োডাটা তৈরি করার কোনো বিশেষ শর্ত আছে?
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                               <h4>আমাদের ওয়েবসাইটে বায়োডাটা তৈরি করতে হলে নূন্যতম আবশ্যকতা নিম্নরূপ-</h4>
                                    <div className="ms-5">
                                    <br />
                               <strong >পুরুষ-</strong>
                               <br />
                               <p>১/ ৫ ওয়াক্ত নামাযী হতে হবে।</p>
                               <p>২/ ওয়াজিব দাড়ি সুন্নতি পদ্ধতিতে বড় থাকতে হবে।</p>
                               <p>৩/ টাখনুর উপর কাপড় পরতে হবে।</p>
                               <br />
                               <strong >নারী-</strong>
                               <br />
                               <p>১/ ৫ ওয়াক্ত নামাযী হতে হবে।</p>
                               <p>২/ “নিকাব” সহ ফরজ পর্দানশীন হতে হবে।</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Second Flus Accordion */}
                      
                       <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button qus_heading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                আমার বায়োডাটা এপ্রুভ হয় নি কেন?
                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                     <h5 className='my-3'>আমরা বিভিন্ন কারণে বায়োডাটা এপ্রুভ করি না। তার মাঝে কয়েকটি কারণ উল্লেখ করা হলো।</h5>

                                        <div className="ms-5">
                                        <p>১/  আপনি যদি অভিভাবককে না জানিয়ে আমাদের ওয়েবসাইটে বায়োডাটা জমা দেন।   </p>
                                            <p>২/ অভিভাবকের নাম্বারের ঘরে নিজের নাম্বার লিখে রাখেন।</p>
                                            <p>৩/ ৫ ওয়াক্ত নামাযী না হোন।</p>
                                            <p>৪/ ওয়াজিব দাঁড়ি সুন্নতি পদ্ধতীতে বড় না থাকে। (পুরুষদের জন্য)</p>
                                            <p>৫/ টাখনুর উপর কাপড় না পরেন। (পুরুষদের জন্য)</p>
                                            <p>৬/ নিকাব সহ ফরজ পর্দা/বোরকা না পরেন। (নারীদের জন্য)</p>
                                            <p>৭/ হিজাব পরেন কিন্ত নিকাব পরেন না। (নারীদের জন্য)৮/ বায়োডাটাতে কোনো মিথ্যা তথ্য দিয়ে থাকলে।</p>
                                            <p>৮/ বায়োডাটাতে কোনো মিথ্যা তথ্য দিয়ে থাকলে।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button qus_heading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                কিছু তথ্য সঠিকভাবে না দেয়ার কারণে আমার বায়োডাটা এপ্রুভ হয় নি, আমি কি আবার বায়োডাটা জমা দিতে পারবো?
                                </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                হ্যাঁ পারবেন। যে ঘরে ভুল তথ্য দেয়ার জন্য আপনার বায়োডাটা নট এপ্রুভ করা হয়েছে, সেই ঘরে সঠিক তথ্য দিয়ে Save Changes ক্লিক করে Publish Biodata করবেন তাহলে এপ্রুভ করা হবে ইন শা আল্লাহ। তবে উপরের প্রশ্নের উত্তরে উল্লিখিত বিশেষ শর্ত না থাকার কারণে যদি বায়োডাটা নট এপ্রুভ হয় তাহলে আর এপ্রুভ হবে না। 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSix">
                                <button className="accordion-button qus_heading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                আমি ৫ ওয়াক্ত নামাযী, কিন্ত আমি সুন্নতী দাঁড়ি রাখি নি, আমি বায়োডাটা আপলোড করতে পারবো?
                                </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                না, আপনি বায়োডাটা আপলোড করলে এপ্রুভ করা হবে না। যাদের ওয়াজিব দাড়ি আছে শুধুমাত্র তাদের বায়োডাটা এপ্রুভ করা হবে।
                                    </div>
                                </div>
                            </div>
</div>

                 
                       
                        {/* Third accordion */}
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingSeven">
                                        <button className="accordion-button qus_heading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        আমি ৫ ওয়াক্ত নামাযী, আমি বোরকা ও হিজাব পরি তবে নিকাব করি না। আমি বায়োডাটা আপলোড করতে পারবো?
                                        </button>
                                        </h2>
                                        <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                        না, আপনি বায়োডাটা আপলোড করলে এপ্রুভ করা হবে না। যারা নিকাব সহ বোরকা পরেন শুধুমাত্র তাদের বায়োডাটা এপ্রুভ করা হয়।
                                           </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingEight">
                                        <button className="accordion-button qus_heading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                        আমার অভিভাবক আমার বিয়েতে রাজি নয়, আমি কি বায়োডাটা জমা দিতে পারবো?
                                        </button>
                                        </h2>
                                        <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                        না। আপনি পাত্র/পাত্রী যেই হোন না কেন, আমাদের ওয়েবসাইটে বায়োডাটা তৈরি করতে হলে অবশ্যই অভিভাবকের অনুমতি নিয়ে জমা দিতে হবে। অন্যথায় বায়োডাটা এপ্রুভ করা হবে না।
                                           
                                           </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingNine">
                                        <button className="accordion-button qus_heading collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                        আমার অভিভাবক আমার বিয়েতে রাজি নয়, আমি কি বায়োডাটা জমা দিতে পারবো?
                                        </button>
                                        </h2>
                                        <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                        না। আপনি পাত্র/পাত্রী যেই হোন না কেন, আমাদের ওয়েবসাইটে বায়োডাটা তৈরি করতে হলে অবশ্যই অভিভাবকের অনুমতি নিয়ে জমা দিতে হবে। অন্যথায় বায়োডাটা এপ্রুভ করা হবে না।
                                           </div>
                                        </div>
                                    </div>
</div>
                      
                        
                       
                    

                </div>
                       </div>
                              
                    </div>
                    <Footer />
        </>
    );
};

export default AnsQue;