import React, {useState, useEffect} from 'react';
import Project from '../Project/Project';


const Projects = () => {
    
const [projects, setProjects]= useState([]);

useEffect(()=>{
    fetch('projects.json')
    .then(res=> res.json())
    .then(data => setProjects(data));
},[])

    return (
        <div className='container contact fst-italic'>
            <h2>My Recent Projects</h2>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
  {
      projects.map(project =>  <Project key={project.id}
      project={project} >

      </Project>  )
  }

            </div>
        </div>
    );
};

export default Projects;