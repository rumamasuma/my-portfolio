import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

import './ProjectDetails.css';

const ProjectDetail = () => {
    const {projectId} = useParams();

    const [projectDetails, setProjectDetails] = useState({});
  

    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => {
              const details= data.find(detailsInfo => detailsInfo.id == projectId)
            setProjectDetails(details);
        })
    },[projectId])

    return (
        <div className=''>
            <h2>{projectDetails.title}</h2>

       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src=""  className="d-block w-100" alt="..."/>
          </div>
          {/* <div className="carousel-item">
            <img src={projectDetails.image4}  className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={projectDetails.image5}  className="d-block w-100" alt="..."/>
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
        </div>
    );
};

export default ProjectDetail;
