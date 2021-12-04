import React from 'react';
import './Banner.css';
import {  Nav} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Typical from 'react-typical';

const Banner = () => {
 
    return (
        <div className=''>
             
            <div className='banner d-flex align-items-center justify-content-end row '>
                <div className='col-md-6'>
      
                </div>
           <div className=' col-md-6  text-start'>
            <h1>Hi,</h1>
      <h1 className='contact'>
      <Typical
        steps={[ 'THIS IS', 1000, 'MASUMA KHATUN', 500]}
        loop={Infinity}
        wrapper="p"
      />   
      </h1>
            <h1 className='text-primary'>
                <Typical
        steps={['Front End Web Developer', 1000, 'React Developer ', 1000]}
        loop={Infinity}
        wrapper="p"
      />
                </h1>
                
              
          
    <div className='d-flex align-items-center'>
    <div>
         <Nav.Link as={HashLink} to="/home#contact" className='header m-2 rounded fst-italic fw-bold fs-5' >
         <button  className="btn btn-primary m-3">CONTACT ME <i class="fas fa-location-arrow"></i></button>
      </Nav.Link>
      </div>
         <div>  
            <a href='https://drive.google.com/uc?id=1bXpcjA8z8eNxeSnQkRwNTZclHFloe6XY&export=download' className="btn btn-primary  "> <i class="fas fa-cloud-download-alt"></i> DOWNLOAD MY RESUME </a>
          </div>
      </div>       
           </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Banner;
{/* <h1>Hi,</h1>
<h2>This is Masuma Khatun</h2>
<h1> Front End Web Developer </h1> */}