import React from 'react';


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
     {/* <p>Languages - HTML5 |  CSS3 | JavaScript |  ES6 | React  </p>
     <p>Framework - Bootstrap5 | Tailwind CSS | Material UI | React Js | React Bootstrap </p> */}
       <div className='row '>
         <div className="col-md-6 text-start ">
           <h6><i class="fas fa-check-circle text-primary"></i> HTML5</h6>
           <h6><i class="fas fa-check-circle text-primary"></i> CSS3</h6>
           <h6><i class="fas fa-check-circle text-primary"></i> JavaScript</h6>
           <h6> <i class="fas fa-check-circle text-primary"></i> ES6</h6>
           <h6><i class="fas fa-check-circle text-primary"></i> HTML5</h6>
         
         </div>
         <div className="col-md-6 text-start">
        <h6><i class="fas fa-check-circle text-primary"></i> Bootstrap5</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> Tailwind CSS</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> Material UI</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> React Js</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> React Bootstrap</h6>
         </div>
         </div>   
      </div>
    </div>
  </div>

  <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Back-End Technologies </h5>
        <hr />
      {/* <p> Node Js | Express | MongoDB  | REST API</p> */}
        <div className='row'>
        <div className="col-md-6 text-start">
        <h6><i class="fas fa-check-circle text-primary"></i> Node Js</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> Express</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> MongoDB</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> REST API</h6>
        
         </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Tools & Hosting</h5>  
        <hr />
        {/* <p> VS Code | Chrome Dev Tool | Github </p>
        <h6>Hosting - Firebase | Netlify | Heroku</h6>      */}
          <div className='row'>
        <div className="col-md-7 text-start">
        <h6><i class="fas fa-check-circle text-primary"></i> VS Code</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> Chrome Dev-Tool</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> Github</h6> 
         </div>
         <div className="col-md-5 text-start">
        <h6><i class="fas fa-check-circle text-primary"></i> Firebase</h6>
        <h6><i class="fas fa-check-circle text-primary"></i> Netlify</h6>
        <h6><i class="fas fa-check-circle text-primary"></i>Heroku</h6> 
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </div>     
    );
};

export default Skills;
