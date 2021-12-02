import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
const {id,image1,title} = props.project;

    return (
        <div id='projects'>
             <div className="col  p-3" >
      <div className="card h-100 ">
        <img src={image1}  className="card-img-top p-3" alt="..."/>
        <div className="card-body">
          <h4 className="card-title header">{title}</h4>
        </div>
        <div className="">
        <Link to ={`/projects/${id}`}>
  <button  className='btn-clr  fw-bold m-2 '>Explore More</button>
  
  </Link> 
        </div>
      </div>
    </div>
        </div>
    );
};

export default Project;