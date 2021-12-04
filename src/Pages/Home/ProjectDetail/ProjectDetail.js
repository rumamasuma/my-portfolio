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
           <div classname='container'>
              <div className="row g-4 m-3">
     <div className="col-md-6 product p-4">
     <div className="card">
      <img src={projectDetails.image2} className="card-img-top p-3" alt="..."/>
      <div className="card-body">
      <a href={projectDetails?.livesite} className=' btn btn-primary rounded m-2'>Live Site</a>
      <a href={projectDetails?.clientSide} className=' btn btn-primary rounded m-2'>Client Side</a>
      <a href={projectDetails?.serverSide} className=' btn btn-primary rounded m-2'>Server Side</a>  
      </div>
      </div>
      </div>
      </div>
     </div>
        </div>
    );
};

export default ProjectDetail;
{/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={projectDetails.image2} className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item" >
    <img src={projectDetails.image3} className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item ">
    <img src={projectDetails.image4} className="d-block w-100" alt="..."/>
  </div>
 
</div>
</div> */}