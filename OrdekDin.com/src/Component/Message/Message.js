import React, {  useState } from 'react';
import message from '../ordekDin_img/message.png';

const Message = () => {
 
    const [message_div, setMessage_div] = useState(false);
    const showMessageDiv = () => setMessage_div(!message_div);

    return (
        <div>
             <figure>
                     <img src={message} onClick={showMessageDiv} className='img-fluid sms_img' alt="" />
                 </figure>
                 <div className={ message_div ? 'message_div active' : 'message_div'}>
                        <h5 className=' text-center' >Need Help?</h5>
                        <input type="text"  className="form-control mb-2" placeholder="Your @email" />
                        <input type="text" className="form-control" placeholder="message..." />
                       <div className="d-grid">
                           <button className="mt-2 btn btn-success mx-5">Send</button>
                       </div>
                 </div>
        </div>
    );
};

export default Message;