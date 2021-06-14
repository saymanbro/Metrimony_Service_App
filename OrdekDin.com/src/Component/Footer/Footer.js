import React from 'react';

const Footer = () => {
    return (
        <>
                <div className="footer_content text-white">
                    <div className="footer_text">
                         <hr  className="bg-info" />
                        <div className="row ">
                            <div className="col-12 col-md-6 text-md-start text-center">
                                <p>© {new Date().getFullYear()} ordekDin.com</p>
                            </div>
                            <div className="col-12 col-md-6 ">
                               <div className="row ">
                                   <div className="col-12 col-sm-6 col-md-6 text-md-end text-center">
                              <strong>         Our Facebook Page</strong>
                                   </div>
                                   <div className="col-12  col-sm-6 col-md-6 text-md-start text-center">
                                      <strong> Our Instragram Page</strong>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Footer;