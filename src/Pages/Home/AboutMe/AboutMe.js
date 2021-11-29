import React from 'react';
import myImg from '../../../images/myImg3.png';
const AboutMe = () => {
    return (
        <div className='m-5 p-5 border'>
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
        <h3 className="card-title">About Me</h3>
        <p className="card-text text-start">My name is Masuma Khatun (Ruma) ,I'am a Front End Web Developer based in Dhaka, Bangladesh.I build some MERN Stack projects.</p>
        <p className="card-text text-start">I love to design websites  and I find it really interesting.</p> 
      </div>
    </div>
  </div>
</div>
            <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
    <h5 className="card-title ">Education</h5>
    </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="card-body">
       
        <h5 className="card-text text-start"> Sheikh Borhan Uddin Post Graduate College</h5>
        <p className="card-text  text-start">M.Sc in Computer Science and Engineering(CSE)</p> 
        <h5 className="card-text text-start">National University</h5>
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