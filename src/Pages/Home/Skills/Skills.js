import React from 'react';
import html from '../../../images/html.png';
import css from '../../../images/css3.png';
import js from '../../../images/javascript.png';
import react from '../../../images/reacat.jpg';
import bootstrap from '../../../images/bootstrab5.jpg'
import tailwind from '../../../images/tailwindcss.png';
import mui from '../../../images/mui.png';
import node from '../../../images/nodejs.png';
import express from '../../../images/express.png';
import mongodb from '../../../images/mongodb.png';

const Skills = () => {
    return (
        <div id='skills'  className='m-5 p-5 border rounded contact fst-italic'>
            <h2 >TECHNICAL SKILLS</h2>
            <div className="row ">
            <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Front-End Technologies </h5>
        <hr />
     <p>Languages - HTML5 |  CSS3 | JavaScript |  ES6 | React  </p>
     <p>Framework - Bootstrap5 | Tailwind CSS | Material UI | React Js | React Bootstrap </p>
          
      </div>
    </div>
  </div>

  <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Back-End Technologies </h5>
        <hr />
      <p> Node Js | Express | MongoDB  | REST API</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Tools</h5>  
        <hr />
        <p> VS Code | Chrome Dev Tool | Github </p>
        <h6>Hosting - Firebase | Netlify | Heroku</h6>     
      </div>
    </div>
  </div>
</div>
   </div>     
    );
};

export default Skills;
{/* <img src={html} alt="" className='w-25  p-2 m-2' />
<img src={css} alt="" className='w-25 p-2 m-2' />
<img src={js} alt="" className='w-25 p-2 m-2' />
<img src={react} alt="" className='w-25 p-2 m-2' />
<img src={bootstrap} alt="" className='w-25 p-2 m-2' />
<img src={tailwind} alt="" className='w-25 p-2 m-2' />
<img src={mui} alt="" className='w-25 p-2 m-2' /> */}
{/* <ul className='list-styled'>
<li>HTML   <img src={html} alt="" className='w-25  p-2 m-2' /></li>
<li>CSS   <img src={css} alt="" className='w-25  p-2 m-2' /></li>
<li>JavaScript   <img src={js} alt="" className='w-25  p-2 m-2' /></li>
<li>React  <img src={react} alt="" className='w-25  p-2 m-2' /></li>
<li>Bootstrap  <img src={bootstrap} alt="" className='w-25  p-2 m-2' /></li>
<li>Tailwind CSS <img src={tailwind} alt="" className='w-25  p-2 m-2' /></li>
<li>Material UI  <img src={mui} alt="" className='w-25  p-2 m-2' /></li>
</ul> */}