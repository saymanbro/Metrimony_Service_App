import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import {getBios }from '../../Action/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { searchBioByField } from '../../Action/action';

const Home = () => {
    const history = useHistory();

    const [ val, setVal ] = useState({
        gender:"", status:"", add:""
    })

    const dispatch = useDispatch();
    const handleSelectedOption = (e) =>{
        setVal({...val , [e.target.name] : e.target.value})
    }
    const searchBio = () => { 
        let { gender, status, add } = val;
        let gen = gender.toLowerCase();
        let sta = status.toLowerCase();
        let ad = add.toLowerCase();
        let key = { gen, sta, ad};
 
            if( gen === "" && sta === "" && ad === ""){
                history.push('/showBio')
            }else{
                         dispatch(searchBioByField(key)) 
                         history.push('/search');
            }
                  
        }

    useEffect(()=> {
        dispatch(getBios());
        
    }, [])
  
    return (
        <>
            <div className="home_section ">
                <div className="main_header ">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 order-1 order-md-0">
                        <div className="select_box rounded">
                     <div className="box1 d-flex justify-content-between ">
                 <p className='text-white'>আমি খুঁজছি</p>
                    <div className="dorp_box1">

                    <select  name='gender' value={val.gender} onChange={handleSelectedOption}className='drop_box select_bg'  >
                      <option >All</option>
                      <option  >Boy</option>
                      <option >Girl</option>
                  </select>
                    </div>
                     </div>
             
                        <div className="box2 d-flex justify-content-between  ">
                        <p className='text-white'>বৈবাহিক অবস্থা</p>
                       <div className="drop_box2 ">
                       <select  name='status' value={val.status} onChange={handleSelectedOption} className='drop_box select_bg'>Helo
                      <option >All</option>
                      <option >Single</option>
                      <option >Married</option>
                  </select>
                       </div>
                        </div>
                 
                      
                       <div className="box3 d-flex justify-content-between">
                       <p className='text-white'>জেলা</p>
                        <div className="drop_box3 ">
                        <select  name='add' value={val.add} onChange={handleSelectedOption} className='drop_box select_bg'>
                            <option>All</option>
                            <option >Dhaka</option>
                            <option >Cumilla</option>
                            
                      </select>
                        </div>
                       </div>
                        <div className="d-grid">
                            <button className="text-white search_btn" onClick={searchBio}>  <Link className='links' to='' ><i className="fas fa-search"></i> Find</Link></button>
                           
                            
                        </div>
                    </div>
                        </div>
                        <div className="col-12 col-md-8 order-0 order-md-1">
                        <div className="main_heading mt-md-5 mt-3 text-center text-white ">
                        <h2 className=" ">
                        যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ  <br /> করে ফেললো। বাকি অর্ধেকের জন্য সে <br /> আল্লাহকে ভয় করুক।
                        </h2>
                     
                        <p>বায়হাকী, শু’আবুল ঈমান – ৫৪৮৬</p>
                    </div>
                        </div>
                    </div>
                   
                   
                </div>

                              <div className="btn_div">
                              <button className="create_bio_heading"> <Link className='links' to='/createBio'> বায়োডাটা  তৈরি  করুন</Link> </button>
                              </div>
                              <div className="btn_div">
                              <button className="bio_video_heading shadow" onClick={() => history.push('/tutorial')}> বায়োডাটা  তৈরি করবেন যে ভাবে </button>
                              </div>

                             <div className="home_text_box1">
                                 <h2 className="text-center my-5">ইসলামে বিবাহের গুরুত্ব</h2>
                              <p className="text-muted">
                              বিবাহ মানবজীবনের এক অপরিহার্য অংশ। মানব প্রজন্মের সুরক্ষা, সুষ্ঠ ও সুস্থ পরিবার গঠন এবং সামাজিক শান্তি-শৃংখলার জন্য বিবাহ এক নির্বিকল্প ব্যবস্থা। সমাজের একক হচ্ছে পরিবার। বিবাহের মাধ্যমেই এই পরিবারের ভিত স্থাপিত হয় এবং তা সম্প্রসারিত হয়। ব্যক্তিজীবনের শৃংখলা, ব্যক্তির মানসিক ও দৈহিক সুস্থতা এবং ধৈর্য, সাহসিকতা, সহমর্মিতা প্রভৃতি গুণাবলীসহ তার সুপ্ত প্রতিভার বিকাশসাধনে বিবাহের ভূমিকা অভাবনীয়। সুতরাং বিবাহ ইসলামের অন্যতম প্রধান সামাজিক বিধান এবং মহানবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম-এর এক গুরুত্বপূর্ণ সুন্নত। ইসলামে বিবাহকে সর্বোচ্চ গুরুত্ব সহকারের দেখা হয়েছে।
                              <br />  <br />

                                    মহান আল্লাহ তায়ালা বলেন, <strong>“আর তােমরা তােমাদের মধ্যকার অবিবাহিত নারী-পুরুষ ও সৎকর্মশীল দাস দাসীদের বিবাহ দাও। তারা অভাবী হলে আল্লাহ নিজ অনুগ্রহে তাদেরকে অভাবমুক্ত করে দেবেন। আল্লাহ প্রাচুর্যময় ও মহাজ্ঞানী।”</strong> – (সূরা নূর – ৩২)।
                                    <br />
                                    <br />

                                    আল্লাহ তায়ালা অন্য আয়াতে বলেন – <strong>“আর তাঁর নিদর্শনাবলীর মধ্যে রয়েছে যে, তিনি তােমাদের জন্য তােমাদের থেকেই স্ত্রীদের সৃষ্টি করেছেন, যাতে তােমরা তাদের কাছে প্রশান্তি পাও। আর তিনি তােমাদের মধ্যে ভালবাসা ও দয়া সৃষ্টি করেছেন। নিশ্চয় এর মধ্যে নিদর্শনাবলী রয়েছে সে কওমের জন্য, যারা চিন্তা করে।”</strong> -(সূরা রূম: ২১)
                                    <br /> <br />
                                    বিয়ের গুরুত্ব সম্পর্কে রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম থেকে কিছু হাদীস –
                                    <br /> <br />
                                    “বিবাহ করা আমার সুন্নাত। যে আমার সুন্নাত অনুসরণ করলাে না,সে আমার দলভুক্ত নয়।তােমরা বিয়ে করাে,কেননা (হাশরে) আমি তােমাদের নিয়ে অন্যান্য উম্মাতের উপর গর্ব করবাে।” (ইবনু মাজাহ – ১৮৪৬)
                                    <br /> <br />
                                    “দু’জনের পারস্পরিক ভালবাসার জন্য বিবাহের মত আর কিছু নেই।” (ইবনু মাজাহ – ১৮৪৭)
                                    <br /> <br />
                                    <strong>“হে যুবক সমাজ! তােমাদের মধ্যে যে বিয়ে করার সামর্থ রাখে, সে যেন বিয়ে করে। কেননা বিয়ে দৃষ্টি ও লজ্জাস্থান হিফাযাতের জন্য সবচেয়ে বেশি সহায়ক। আর যে সামর্থ রাখে না সে যেন সওম পালন করে, কেননা সওম যৌন উত্তেজনা প্রশমনকারী।”</strong> (মুসলিম – ৩৪৬৪)
                                    <br /> <br />
                                    <strong>“তিন ব্যক্তিকে সাহায্য করা আল্লাহর দায়িত্ব। আল্লাহর পথের মুজাহিদ, যে ধার গ্রহীতা তা পরিশােধের চেষ্টা করে এবং যে ব্যক্তি সততা বজায় রাখার জন্য (চরিত্র হিফাযাতের জন্য) বিয়ে করে।” </strong>(তিরমিযী ১৬৫৫) 
                              </p>
                             </div>

                           <div className="home_text_box">
                           <div className="home_text_box2">
                                 <h2 className='text-center  pb-4'>জীবনসঙ্গী নির্বাচনে ইসলামের নির্দেশনা</h2>
                                 <p>
                                 পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়। যে মানুষটির সাথে সারা জীবন অতিবাহিত করতে হবে সেই মানুষটির চারিত্রিক ও নৈতিক বৈশিষ্ট্য তার জীবনসঙ্গীর উপর অনেক প্রভাব বিস্তার করে। 
                                 <br />
                                 <br />

                                    এ ব্যাপারে কয়েকটি হাদিস উল্লেখযোগ্য –

                                    <strong>‘যার দ্বীনদারী ও চরিত্রে তোমরা সন্তুষ্ট, এমন কেউ বিবাহের প্রস্তাব দিলে তার সাথে তোমরা বিবাহ সম্পন্ন কর। তা না করলে পৃথিবীতে ফিৎনা দেখা দেবে ও ব্যাপক ফ্যাসাদ ছড়িয়ে পড়বে।’</strong> (তিরমিযী: ১০৮৪)
                                    <br /> <br />
                                    <strong>‘নারীকে বিবাহ করা হয় চারটি জিনিস দেখে। তার সম্পদ দেখে, বংশমর্যাদা দেখে, রূপ দেখে এবং দ্বীনদারী দেখে। হে মুমিন! তুমি দ্বীনদার নারী বিবাহ করে ধন্য হয়ে যাও।’</strong> (বুখারী : ৫০৯০ )
                                    <br /> <br />
                                    <strong>“সমগ্র দুনিয়াটাই সম্পদ। এর মধ্যে সবচাইতে উত্তম সম্পদ হলাে পরহেযগার স্ত্রী। “</strong>(মুসলিম – ৩৭১৬)
                                    <br /> <br />
                                    <strong>“তোমরা নারীদের (কেবল) রূপ দেখে বিবাহ করো না। হতে পারে রূপই তাদের বরবাদ করে দেবে। তাদের অর্থ-সম্পদ দেখেও বিবাহ করো না, হতে পারে অর্থ-সম্পদ তাকে উদ্ধত করে তুলবে। বরং দ্বীন দেখেই তাদের বিবাহ কর। একজন নাক-কান-কাটা অসুন্দর দাসীও (রূপসী ধনবতী স্বাধীন নারী অপেক্ষা) শ্রেয়, যদি সে দ্বীনদার হয়। “</strong>(ইবনে মাজাহ)
                                    <br /> <br />
                                    উপরিউক্ত হাদিস সমূহের শিক্ষা হল, পাত্র-পাত্রী নির্বাচনে দ্বীনদারী ও সচ্চরিত্রকে সর্বাগ্রে রাখতে হবে। সৌন্দর্য, অর্থ-সম্পদ ও বংশীয় সমতাও বিচার্য বটে, কিন্তু সবই দ্বীনদারীর পরবর্তী স্তরে। দ্বীনদারী ও চরিত্র সন্তোষজনক হলে বাকিগুলোতে ছাড় দেওয়া যায়, কিন্তু বাকিগুলো যতই আকর্ষণীয় হোক, তার খাতিরে দ্বীনদারীতে ছাড় দেওয়ার অবকাশ নেই। আর যদি দ্বীনদারীর সাথে অন্যগুলোও মিলে যায়, সে অতি সুন্দর মিলন বটে, কিন্তু তা খুব সহজলভ্যও নয়। তাই সে রকম আশার ক্ষেত্রে মাত্রাজ্ঞানের পরিচয় দেওয়া জরুরি। একজন দ্বীনদার জীবনসঙ্গী আল্লাহর নৈকট্যে যেতে সহায়ক ভূমিকা পালন করে, অন্যথায় দ্বীনের উপর অবিচল থাকা অনেক কঠিন হয়ে যায়। তাই ইসলামে পাত্র-পাত্রী নির্বাচনে দ্বীনদারীকে প্রাধান্য দেয়ার নির্দেশনা পাওয়া যায়। 
                                 </p>
                             </div>

                           </div>



            </div>




            <Footer />
        </>

        
      
    );
};



export default React.memo(Home);

