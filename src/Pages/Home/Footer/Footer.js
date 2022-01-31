import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="row footer">
        <div className="col-md-4 col-sm-12 p-5" >
          <h3 className=' fst-italic footer-heading'>Masuma Khatun</h3>
          <p className='text-white'>A front-end web developer. Also develop Single Page Applicaion(SPA).</p>
        </div>
        <div className="col-md-4 col-sm-12 p-5">
        <h3 className='fst-italic footer-heading '>Contact Me</h3>
        <address className='text-white p-2 text-start'>
        <i class="fas fa-map-marker-alt"></i>Address: Gandaria,Dhaka-1204, Bangladesh <br />
         <i class="fas fa-phone-alt"></i> Phone :+880 1782004248 <br />
         <i class="far fa-envelope"></i> Email : ruma.masuma@gmail.com
        </address>
        </div>
        <div className="col-md-4 col-sm-12 p-5">
        <h3 className='fst-italic footer-heading '>Social Links</h3>
      <div className='col-sm-12 d-flex align-items-center justify-content-center'>
      <div className=' icon rounded-circle ' > <a href='https://www.facebook.com/ruma.masuma.1/'><i class="fab fa-facebook"></i></a></div>
      <div className=' icon rounded-circle '><a href='https://twitter.com/MasumaRuma3'><i class="fab fa-twitter"></i></a></div>
        <div className=' icon rounded-circle '><i class="fab fa-whatsapp-square"></i></div>
       <div className=' icon rounded-circle'><a href='https://www.linkedin.com/in/masuma-khatun-ruma-21b478220/'> <i class="fab fa-linkedin"></i></a></div>
      </div>
        </div>
        <hr />
 <div className="row">

   <div className="col-sm-12 text-white">copyright &copy;2021.Designed by rumamasuma</div>
 </div>
    </footer>
    );
};

export default Footer;