import React from 'react';
import myImg from '../../../images/myImg3.png';
import cooking from '../../../images/chef.png';
import makeup from '../../../images/makeup-pouch.png';
import shopping from '../../../images/shopping (1).png';
import photography from '../../../images/photography.png';
import traveling from '../../../images/travelling.png';
import './AboutMe.css';

const AboutMe = () => {


    return (
        <div id='about'   className='m-5 p-5 border fst-italic contact'>

            <h2>Some Words About Me</h2>
            <div>
            <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={myImg} className="img-fluid rounded-circle " alt="..."/>
    </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
      <div className="card-body">
        <h5 className="card-title font-monospace">Let me introduce myself</h5>
        {/* <h3 className="card-title">About Me</h3> */}
        <p className="card-text text-start">My name is Masuma Khatun (Ruma) ,I'am a Front End Web Developer based in Dhaka, Bangladesh.I build some MERN Stack projects.</p>
        <p className="card-text text-start">I love to design websites  and I find it really interesting.</p> 
      </div>
    </div>
    <h4>My Interests</h4>
   <div className='mx-auto m-2'>
   <img src={cooking} className='interest p-2' alt="" />
    <img src={makeup} className='interest p-2' alt="" />
    <img src={shopping} className='interest p-2' alt="" />
    <img src={photography} className='interest p-2' alt="" />
    <img src={traveling} className='interest p-2' alt="" />
   </div>
  </div>
</div>
            <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
    <h5 className="card-title "><i class="fas fa-user-graduate"></i> Education</h5>
    </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="card-body">
       
        <h5 className="card-text text-start"><i class="fas fa-university"></i>  Sheikh Borhan Uddin Post Graduate College</h5>
        <p className="card-text  text-start">M.Sc in Computer Science and Engineering(CSE)</p> 
        <h5 className="card-text text-start"><i class="fas fa-university"></i> National University</h5>
        <p className="card-text  text-start">B.Sc in Computer Science and Engineering(CSE)</p> 
      
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default AboutMe;