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
        <div className='m-5 p-5 border rounded'>
            <h2> General Skills that I Gained</h2>
            <div className="row">
  <div className="col-sm-12 col-md-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Front-End </h5>
     <img src={html} alt="" className='w-25  p-2 m-2' />
     <img src={css} alt="" className='w-25 p-2 m-2' />
     <img src={js} alt="" className='w-25 p-2 m-2' />
     <img src={react} alt="" className='w-25 p-2 m-2' />
     <img src={bootstrap} alt="" className='w-25 p-2 m-2' />
     <img src={tailwind} alt="" className='w-25 p-2 m-2' />
     <img src={mui} alt="" className='w-25 p-2 m-2' />
        
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Back-End  </h5>
        <img src={node} alt="" className='w-25  p-2 m-2' />
     <img src={express} alt="" className='w-25 p-2 m-2' />
     <img src={mongodb} alt="" className='w-25 p-2 m-2' />
        
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Skills;