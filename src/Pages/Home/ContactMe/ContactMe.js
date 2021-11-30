import React from 'react';
import emailjs from 'emailjs-com';
import email from '../../../images/email.png';
import './ContactMe.css';
const ContactMe = () => {
    
    const mailSubmit = e => {
         e.preventDefault();
        // console.log(e);
        emailjs.sendForm('service_uyyfioc',
        'template_gorxpgp',
        e.target,
        'user_5PhpkKo1FlYuP3bUtk3NH'
        ).then(res=>{
            console.log(res);
        }).catch(err => console.log(err));
            
    };
    return (
        <div className='contact m-4 p-5'>
            <h2 >Lets Get in Touch</h2>
            <div className='row d-flex align-items-center justify-content-center contact form-bg rounded '>
           <div className="col-md-6">
     <img src={email} alt="" />
           </div>
            <div className="col-md-6  p-5">
            <form onSubmit={mailSubmit}>
      <input type='name' name='name' placeholder="Your Name"  />
      <input type='email' name='user_email'   placeholder="Your Email"  />
      <input type='subject' name='subject'  placeholder="Your Subject"  />
      <textarea  name='message'  placeholder="Your Message" /> <br/>
      <input   type="submit" value='Send' className='w-25 bold' />
    </form>
            </div>
            </div>
        </div>
    );
};

export default ContactMe;