import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
const Project = (props) => {
const {id,image1,title} = props.project;

    return (
        <div id='projects'>
             <div className="col  p-3 h-100" >
      <div className="card  ">
        <img src={image1}  className="card-img-top p-3 project-img" alt="..."/>
        <div className="card-body">
          <h4 className="card-title  contact">{title}</h4>
        </div>
        <div className="">
        <Link to ={`/projects/${id}`}>
  <button  className='btn btn-primary rounded  fw-bold m-2 '>Explore More</button>
  
  </Link> 
        </div>
      </div>
    </div>
        </div>
    );
};

export default Project;